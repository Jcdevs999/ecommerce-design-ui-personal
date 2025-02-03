import {
  Grid,
  Smartphone,
  Shirt,
  Home,
  Dumbbell,
  Sparkles,
  BookOpen,
  Car,
} from "lucide-react";

export const categories = [
  { name: "Electronics", icon: Smartphone, count: 1250 },
  { name: "Fashion", icon: Shirt, count: 850 },
  { name: "Home & Garden", icon: Home, count: 720 },
  { name: "Sports", icon: Dumbbell, count: 450 },
  { name: "Beauty", icon: Sparkles, count: 680 },
  { name: "Books", icon: BookOpen, count: 920 },
  { name: "Automotive", icon: Car, count: 340 },
];

export const products = [
  {
    id: 1,
    name: "Smartphone X",
    category: "Electronics",
    price: 999,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Laptop Pro",
    category: "Electronics",
    price: 1299,
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Designer T-Shirt",
    category: "Fashion",
    price: 49,
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Running Shoes",
    category: "Fashion",
    price: 89,
    image: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Garden Tools Set",
    category: "Home & Garden",
    price: 129,
    image: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Yoga Mat",
    category: "Sports",
    price: 29,
    image: "/placeholder.svg",
  },
  {
    id: 7,
    name: "Skincare Set",
    category: "Beauty",
    price: 79,
    image: "/placeholder.svg",
  },
  {
    id: 8,
    name: "Bestseller Novel",
    category: "Books",
    price: 19,
    image: "/placeholder.svg",
  },
  {
    id: 9,
    name: "Car Cleaning Kit",
    category: "Automotive",
    price: 39,
    image: "/placeholder.svg",
  },
  // Add more products as needed
];
