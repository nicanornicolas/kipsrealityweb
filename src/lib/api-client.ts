/**
 * Centralized API Client with authentication handling
 * Automatically adds Authorization headers and handles token refresh
 */

// Storage keys matching AuthContext
const STORAGE_KEYS = {
  TOKENS: 'rentflow_tokens',
  USER: 'rentflow_user'
} as const;

interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

interface ApiResponse<T = unknown> {
  data?: T;
  error?: string;
  status: number;
}

interface ApiRequestOptions extends RequestInit {
  headers?: Record<string, string>;
  auth?: boolean;
  retryOnAuthFailure?: boolean;
}

class ApiError extends Error {
  constructor(
    public status: number,
    public message: string,
    public response?: Response
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

/**
 * Get stored tokens from localStorage
 */
function getStoredTokens(): AuthTokens | null {
  if (typeof window === 'undefined') return null;
  try {
    const tokens = localStorage.getItem(STORAGE_KEYS.TOKENS);
    return tokens ? JSON.parse(tokens) : null;
  } catch {
    return null;
  }
}

/**
 * Update stored tokens in localStorage
 */
function updateStoredTokens(tokens: AuthTokens | null): void {
  if (typeof window === 'undefined') return;
  try {
    if (tokens) {
      localStorage.setItem(STORAGE_KEYS.TOKENS, JSON.stringify(tokens));
    } else {
      localStorage.removeItem(STORAGE_KEYS.TOKENS);
    }
  } catch (error) {
    console.error('Failed to update tokens in localStorage:', error);
  }
}

/**
 * Clear authentication data
 */
function clearAuthData(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEYS.TOKENS);
    localStorage.removeItem(STORAGE_KEYS.USER);
  } catch (error) {
    console.error('Failed to clear auth data:', error);
  }
}

/**
 * Check if token is expired or about to expire (within 5 minutes)
 */
function isTokenExpiredOrAboutToExpire(tokens: AuthTokens): boolean {
  if (!tokens.expiresAt) return true;
  const currentTime = Math.floor(Date.now() / 1000);
  const bufferTime = 5 * 60; // 5 minutes buffer
  return tokens.expiresAt - bufferTime <= currentTime;
}

/**
 * Attempt to refresh the access token using refresh token
 */
async function refreshAccessToken(): Promise<AuthTokens | null> {
  try {
    const tokens = getStoredTokens();
    if (!tokens?.refreshToken) {
      return null;
    }

    const response = await fetch('/api/auth/refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken: tokens.refreshToken }),
    });

    if (!response.ok) {
      console.warn('Token refresh failed');
      return null;
    }

    const newTokens = await response.json();
    updateStoredTokens(newTokens);
    return newTokens;
  } catch (error) {
    console.error('Token refresh error:', error);
    return null;
  }
}

/**
 * Get authentication headers
 */
async function getAuthHeaders(): Promise<Record<string, string>> {
  let tokens = getStoredTokens();
  
  // Check if token needs refresh
  if (tokens && isTokenExpiredOrAboutToExpire(tokens)) {
    const newTokens = await refreshAccessToken();
    if (newTokens) {
      tokens = newTokens;
    } else {
      // Refresh failed, clear auth data
      clearAuthData();
      throw new ApiError(401, 'Session expired. Please log in again.');
    }
  }

  if (!tokens?.accessToken) {
    throw new ApiError(401, 'No authentication token found');
  }

  return {
    'Authorization': `Bearer ${tokens.accessToken}`,
    'Content-Type': 'application/json',
  };
}

/**
 * Make an authenticated API request
 */
async function apiRequest<T = unknown>(
  url: string,
  options: ApiRequestOptions = {}
): Promise<ApiResponse<T>> {
  const {
    headers = {},
    auth = true,
    retryOnAuthFailure = true,
    ...fetchOptions
  } = options;

  let authHeaders: Record<string, string> = {};
  
  try {
    if (auth) {
      authHeaders = await getAuthHeaders();
    }
  } catch (error) {
    if (error instanceof ApiError && error.status === 401) {
      // Clear auth and redirect to login
      clearAuthData();
      if (typeof window !== 'undefined') {
        window.location.href = '/login';
      }
      return {
        error: error.message,
        status: 401
      };
    }
    throw error;
  }

  const requestHeaders = {
    ...authHeaders,
    ...headers,
  };

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      headers: requestHeaders,
    });

    // Handle 401 Unauthorized
    if (response.status === 401 && auth && retryOnAuthFailure) {
      // Try to refresh token and retry once
      const newTokens = await refreshAccessToken();
      if (newTokens) {
        // Retry with new token
        authHeaders.Authorization = `Bearer ${newTokens.accessToken}`;
        const retryResponse = await fetch(url, {
          ...fetchOptions,
          headers: { ...requestHeaders, ...authHeaders },
        });
        
        if (retryResponse.ok) {
          const data = await retryResponse.json();
          return { data, status: retryResponse.status };
        }
      }
      
      // Refresh failed or retry failed - clear auth and redirect
      clearAuthData();
      if (typeof window !== 'undefined') {
        window.location.href = '/login';
      }
      return {
        error: 'Session expired. Please log in again.',
        status: 401
      };
    }

    if (!response.ok) {
      let errorMessage = `Request failed with status ${response.status}`;
      try {
        const errorData = await response.json();
        errorMessage = errorData.error || errorData.message || errorMessage;
      } catch {
        // Ignore JSON parsing errors
      }
      
      throw new ApiError(response.status, errorMessage, response);
    }

    // For 204 No Content responses
    if (response.status === 204) {
      return { status: response.status };
    }

    const data = await response.json();
    return { data, status: response.status };
  } catch (error) {
    if (error instanceof ApiError) {
      return {
        error: error.message,
        status: error.status
      };
    }
    
    console.error('API request error:', error);
    return {
      error: error instanceof Error ? error.message : 'Unknown error occurred',
      status: 500
    };
  }
}

/**
 * Convenience methods for common HTTP operations
 */
export const api = {
  /**
   * GET request
   */
  get: <T = unknown>(url: string, options?: Omit<ApiRequestOptions, 'method'>) =>
    apiRequest<T>(url, { ...options, method: 'GET' }),

  /**
   * POST request
   */
  post: <T = unknown>(url: string, body?: unknown, options?: Omit<ApiRequestOptions, 'method' | 'body'>) =>
    apiRequest<T>(url, {
      ...options,
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined,
    }),

  /**
   * PUT request
   */
  put: <T = unknown>(url: string, body?: unknown, options?: Omit<ApiRequestOptions, 'method' | 'body'>) =>
    apiRequest<T>(url, {
      ...options,
      method: 'PUT',
      body: body ? JSON.stringify(body) : undefined,
    }),

  /**
   * PATCH request
   */
  patch: <T = unknown>(url: string, body?: unknown, options?: Omit<ApiRequestOptions, 'method' | 'body'>) =>
    apiRequest<T>(url, {
      ...options,
      method: 'PATCH',
      body: body ? JSON.stringify(body) : undefined,
    }),

  /**
   * DELETE request
   */
  delete: <T = unknown>(url: string, options?: Omit<ApiRequestOptions, 'method'>) =>
    apiRequest<T>(url, { ...options, method: 'DELETE' }),

  /**
   * Get current access token (for manual use cases)
   */
  getAccessToken: (): string | null => {
    const tokens = getStoredTokens();
    return tokens?.accessToken || null;
  },

  /**
   * Clear authentication data
   */
  clearAuth: clearAuthData,

  /**
   * Check if user is authenticated
   */
  isAuthenticated: (): boolean => {
    const tokens = getStoredTokens();
    return !!(tokens?.accessToken && !isTokenExpiredOrAboutToExpire(tokens));
  },
};

export default api;