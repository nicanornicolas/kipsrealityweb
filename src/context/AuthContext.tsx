'use client'

import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'SYSTEM_ADMIN' | 'PROPERTY_MANAGER' | 'TENANT' | 'VENDOR' | 'AGENT';
  avatarUrl?: string;
  region?: 'USA' | 'KEN' | 'NGA' | 'GHA' | null;
  currency?: string | null;
  phone?: string | null;
  phoneVerified?: Date | null;
  twoFactorEnabled?: boolean;
  organization?: {
    id: string;
    name: string;
    slug: string;
    region?: 'USA' | 'KEN' | 'NGA' | 'GHA' | null;
    currency?: string | null;
  };
  organizationUserId?: string;
  consentNotifications?: boolean;
  consentMarketing?: boolean;
}

interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

interface AuthContextType {
  user: User | null;
  login: (userData: User, tokens: AuthTokens) => void;
  logout: () => void;
  refreshUser: () => Promise<void>;
  isLoading: boolean;
  hasRole: (roles: string[]) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEYS = {
  USER: 'rentflow_user',
  TOKENS: 'rentflow_tokens',
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const getStoredUser = (): User | null => {
    if (typeof window === 'undefined') return null;
    try {
      const userData = localStorage.getItem(STORAGE_KEYS.USER);
      return userData ? JSON.parse(userData) : null;
    } catch {
      return null;
    }
  };

  const getStoredTokens = (): AuthTokens | null => {
    if (typeof window === 'undefined') return null;
    try {
      const tokenData = localStorage.getItem(STORAGE_KEYS.TOKENS);
      return tokenData ? JSON.parse(tokenData) : null;
    } catch {
      return null;
    }
  };

  const setStoredUser = (userData: User | null) => {
    if (userData) {
      localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(userData));
    } else {
      localStorage.removeItem(STORAGE_KEYS.USER);
    }
  };

  const setStoredTokens = (tokens: AuthTokens | null) => {
    if (tokens) {
      localStorage.setItem(STORAGE_KEYS.TOKENS, JSON.stringify(tokens));
    } else {
      localStorage.removeItem(STORAGE_KEYS.TOKENS);
    }
  };

  const refreshUser = async () => {
    const tokens = getStoredTokens();
    if (!tokens?.accessToken) return;

    try {
      const response = await fetch('/api/auth/me', {
        headers: {
          Authorization: `Bearer ${tokens.accessToken}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        const nextUser = data.user ?? data;
        if (nextUser?.role) {
          setStoredUser(nextUser);
          setUser(nextUser);
        }
      }
    } catch (error) {
      console.error('Failed to refresh user:', error);
    }
  };

  useEffect(() => {
    let isMounted = true;

    const hydrateAuth = async () => {
      const storedUser = getStoredUser();
      const storedTokens = getStoredTokens();

      if (storedUser && isMounted) {
        setUser(storedUser);
      }

      if (storedTokens?.accessToken) {
        await refreshUser();
      }

      if (isMounted) {
        setIsLoading(false);
      }
    };

    void hydrateAuth();

    return () => {
      isMounted = false;
    };
  }, []);

  const login = (userData: User, tokens: AuthTokens) => {
    setStoredUser(userData);
    setStoredTokens(tokens);
    setUser(userData);
  };

  const logout = () => {
    setStoredUser(null);
    setStoredTokens(null);
    setUser(null);
    router.push('/login');
  };

  const hasRole = (roles: string[]) => {
    return user ? roles.includes(user.role) : false;
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, refreshUser, isLoading, hasRole }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
