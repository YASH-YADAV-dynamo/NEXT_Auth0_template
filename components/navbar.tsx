'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon, UserCircle } from 'lucide-react';
import { useTheme } from 'next-themes';

export function Navbar() {
  const { user, isLoading } = useUser();
  const { theme, setTheme } = useTheme();

  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">Modern App</h1>
          </div>
          
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </Button>

            {!isLoading && (
              <div>
                {user ? (
                  <div className="flex items-center gap-4">
                    <span className="text-sm">{user.name}</span>
                    <Button variant="outline" asChild>
                      <a href="/api/auth/logout">Logout</a>
                    </Button>
                  </div>
                ) : (
                  <Button asChild>
                    <a href="/api/auth/login">
                      <UserCircle className="mr-2 h-4 w-4" />
                      Login
                    </a>
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}