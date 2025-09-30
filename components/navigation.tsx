import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { 
  BarChart3, 
  Trophy, 
  MessageSquare, 
  Plus, 
  User,
  Zap,
  TrendingUp,
  Target
} from "lucide-react";

export function Navigation() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-gradient-orange">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground">
            Viral<span className="text-primary">talk</span>
          </span>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Campaigns</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px]">
                  <NavigationMenuLink className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Active Campaigns</div>
                      <div className="text-sm text-muted-foreground">Browse ongoing campaigns</div>
                    </div>
                  </NavigationMenuLink>
                  <NavigationMenuLink className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors">
                    <Plus className="h-5 w-5 text-success" />
                    <div>
                      <div className="font-medium">Create Campaign</div>
                      <div className="text-sm text-muted-foreground">Launch your campaign</div>
                    </div>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Analytics</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[400px]">
                  <NavigationMenuLink className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors">
                    <Trophy className="h-5 w-5 text-warning" />
                    <div>
                      <div className="font-medium">Leaderboards</div>
                      <div className="text-sm text-muted-foreground">Top performers & rankings</div>
                    </div>
                  </NavigationMenuLink>
                  <NavigationMenuLink className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors">
                    <TrendingUp className="h-5 w-5 text-accent" />
                    <div>


<div className="font-medium">Mindshare Analytics</div>
                      <div className="text-sm text-muted-foreground">Track campaign performance</div>
                    </div>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-muted transition-colors">
                <MessageSquare className="h-4 w-4" />
                <span>Yaps</span>
                <Badge variant="secondary" className="ml-1">24</Badge>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-3">
          {!isSignedIn ? (
            <>
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
              <Button size="sm" className="bg-gradient-orange hover:opacity-90 transition-opacity">
                <Target className="h-4 w-4 mr-2" />
                Create Campaign
              </Button>
            </>
          ) : (
            <Button variant="outline" size="sm">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
