"use client"
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <NavigationMenu>
      {/* The NavigationMenuList acts as our container */}
      <NavigationMenuList className="w-full flex items-center justify-between px-4 py-2">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className="text-xl font-bold">
              Logo
            </NavigationMenuLink>
          </Link>
        </div>

        {/* Center: Desktop Menu Items */}
        <div className="hidden md:flex items-center space-x-4">
          <NavigationMenuItem>
            <Link href="/home" legacyBehavior passHref>
              <NavigationMenuLink>Home</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 p-4">
                <li>
                  <Link href="/services/design">Design</Link>
                </li>
                <li>
                  <Link href="/services/development">Development</Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact" legacyBehavior passHref>
              <NavigationMenuLink>Contact</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </div>

        {/* Right: Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

