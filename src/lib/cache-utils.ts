/**
 * Cache utilities for performance optimization
 * Provides in-memory caching with TTL and cache invalidation
 */

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  ttl: number;
}

class CacheManager {
  private cache = new Map<string, CacheEntry<any>>();
  private defaultTTL = 5 * 60 * 1000; // 5 minutes

  /**
   * Get cached data if it exists and hasn't expired
   */
  get<T>(key: string): T | null {
    const entry = this.cache.get(key);
    
    if (!entry) {
      return null;
    }

    if (Date.now() - entry.timestamp > entry.ttl) {
      this.cache.delete(key);
      return null;
    }

    return entry.data;
  }

  /**
   * Set data in cache with optional TTL
   */
  set<T>(key: string, data: T, ttl?: number): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      ttl: ttl || this.defaultTTL
    });
  }

  /**
   * Delete specific cache entry
   */
  delete(key: string): void {
    this.cache.delete(key);
  }

  /**
   * Clear all cache entries matching a pattern
   */
  clearPattern(pattern: string): void {
    for (const key of this.cache.keys()) {
      if (key.includes(pattern)) {
        this.cache.delete(key);
      }
    }
  }

  /**
   * Clear all cache entries
   */
  clear(): void {
    this.cache.clear();
  }

  /**
   * Get cache statistics
   */
  getStats() {
    const now = Date.now();
    let validEntries = 0;
    let expiredEntries = 0;

    for (const entry of this.cache.values()) {
      if (now - entry.timestamp > entry.ttl) {
        expiredEntries++;
      } else {
        validEntries++;
      }
    }

    return {
      totalEntries: this.cache.size,
      validEntries,
      expiredEntries,
      hitRate: validEntries / (validEntries + expiredEntries) || 0
    };
  }

  /**
   * Clean up expired entries
   */
  cleanup(): void {
    const now = Date.now();
    
    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > entry.ttl) {
        this.cache.delete(key);
      }
    }
  }
}

// Global cache instance
export const cacheManager = new CacheManager();

// Cache key generators
export const CacheKeys = {
  unit: (unitId: string, includes?: string[]) => 
    `unit:${unitId}:${includes?.sort().join(',') || 'basic'}`,
  
  unitsByProperty: (propertyId: string, includes?: string[]) => 
    `units:property:${propertyId}:${includes?.sort().join(',') || 'basic'}`,
  
  listing: (listingId: string) => `listing:${listingId}`,
  
  listingsByUnit: (unitId: string) => `listings:unit:${unitId}`,
  
  listingHistory: (unitId: string, limit?: number) => 
    `listing_history:${unitId}:${limit || 'all'}`,
  
  userListings: (userId: string, filters?: Record<string, any>) => 
    `user_listings:${userId}:${JSON.stringify(filters || {})}`,
  
  listingStats: (propertyId?: string, timeRange?: string) => 
    `listing_stats:${propertyId || 'all'}:${timeRange || '30d'}`,
};

/**
 * Cache decorator for async functions
 */
export function cached<T extends (...args: any[]) => Promise<any>>(
  keyGenerator: (...args: Parameters<T>) => string,
  ttl?: number
) {
  return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
    const method = descriptor.value;

    descriptor.value = async function (...args: Parameters<T>) {
      const cacheKey = keyGenerator(...args);
      
      // Try to get from cache first
      const cached = cacheManager.get(cacheKey);
      if (cached !== null) {
        return cached;
      }

      // Execute original method
      const result = await method.apply(this, args);
      
      // Cache the result
      cacheManager.set(cacheKey, result, ttl);
      
      return result;
    };
  };
}

/**
 * Cache invalidation helper
 */
export class CacheInvalidator {
  /**
   * Invalidate cache entries related to a unit
   */
  static invalidateUnit(unitId: string): void {
    cacheManager.clearPattern(`unit:${unitId}`);
    cacheManager.clearPattern(`listings:unit:${unitId}`);
    cacheManager.clearPattern(`listing_history:${unitId}`);
  }

  /**
   * Invalidate cache entries related to a property
   */
  static invalidateProperty(propertyId: string): void {
    cacheManager.clearPattern(`units:property:${propertyId}`);
    cacheManager.clearPattern(`listing_stats:${propertyId}`);
  }

  /**
   * Invalidate cache entries related to a user
   */
  static invalidateUser(userId: string): void {
    cacheManager.clearPattern(`user_listings:${userId}`);
  }

  /**
   * Invalidate all listing-related cache
   */
  static invalidateAllListings(): void {
    cacheManager.clearPattern('listing');
    cacheManager.clearPattern('user_listings');
    cacheManager.clearPattern('listing_stats');
  }
}

// Periodic cleanup
setInterval(() => {
  cacheManager.cleanup();
}, 10 * 60 * 1000); // Clean up every 10 minutes