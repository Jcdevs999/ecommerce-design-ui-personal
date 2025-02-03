"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Search,
  ShoppingCart,
  User,
  Sun,
  Moon,
  Menu,
  Heart,
} from "lucide-react";

export default function Header() {
  const { setTheme } = useTheme();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className=" mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <Link
                  href="/categories"
                  className="text-lg font-medium hover:text-primary"
                >
                  Categories
                </Link>
                <Link
                  href="/deals"
                  className="text-lg font-medium hover:text-primary"
                >
                  Deals
                </Link>
                <Link
                  href="/sellers"
                  className="text-lg font-medium hover:text-primary"
                >
                  Become a Seller
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <ShoppingCart className="h-6 w-6" />
            <span className="font-bold hidden sm:inline">Jcarts</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link
              href="/products"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Products
            </Link>
            <Link
              href="/deals"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Deals
            </Link>
            <Link
              href="/sellers"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Become a Seller
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {/* Mobile Search Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* Desktop Search */}
          <div className="hidden md:flex relative justify-end">
            <Input
              type="search"
              placeholder="Search products..."
              className="w-[300px] pl-8"
            />
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>

          {/* Wishlist */}
          <Link href="/wishlist">
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:inline-flex"
            >
              <Heart className="h-5 w-5" />
            </Button>
          </Link>

          {/* Cart */}
          <Link href="/cart">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </Link>

          {/* User Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuItem>
                <Link href="/auth/login" className="w-full">
                  Login
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/auth/register" className="w-full">
                  Register
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/dashboard" className="w-full">
                  Dashboard
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:inline-flex"
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isSearchOpen && (
        <div className="p-4 border-t md:hidden">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search products..."
              className="w-full pl-8"
            />
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      )}
    </header>
  );
}
