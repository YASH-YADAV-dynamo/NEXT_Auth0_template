import { Navbar } from '@/components/navbar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
            Welcome to Your Modern App
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A secure, fast, and beautiful application built with Next.js and Auth0
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card>
            <CardHeader>
              <ShieldCheck className="h-8 w-8 mb-4 text-primary" />
              <CardTitle>Secure Authentication</CardTitle>
              <CardDescription>
                Powered by Auth0 for enterprise-grade security
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 mb-4 text-primary" />
              <CardTitle>Lightning Fast</CardTitle>
              <CardDescription>
                Built on Next.js for optimal performance
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <Globe className="h-8 w-8 mb-4 text-primary" />
              <CardTitle>Modern Design</CardTitle>
              <CardDescription>
                Beautiful UI with Tailwind CSS and shadcn/ui
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>
              Follow these steps to set up your application
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-4">
              <li>Create an Auth0 account and application</li>
              <li>Copy your Auth0 credentials to .env.local</li>
              <li>Run npm install to install dependencies</li>
              <li>Start the development server with npm run dev</li>
            </ol>
            <div className="mt-6">
              <Button className="w-full sm:w-auto">
                View Documentation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}