"use client";

import { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Star, Filter } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Image from "next/image";

// Mock categories and products
const categories = [
  "Electronics",
  "Fashion",
  "Home & Garden",
  "Sports",
  "Beauty",
  "Books",
  "Toys",
  "Automotive"
]

const products = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 199.99,
    rating: 4.8,
    image: "/e-commerce-assets/headset.jpg",
    category: "Electronics",
    description: "High-quality wireless headphones.",
  },
  {
    id: 2,
    title: "Organic Cotton T-Shirt",
    price: 29.99,
    rating: 4.5,
    image: "/e-commerce-assets/smart-watch.jpg",
    category: "Fashion",
    description: "Comfortable and sustainable cotton t-shirt",
  },
  {
    id: 3,
    title: "Smart Watch Series X",
    price: 299.99,
    rating: 4.9,
    image: "/e-commerce-assets/tshirt.jpg",
    category: "Electronics",
    description: "The latest smartwatch with advanced features",
  },
  {
    id: 4,
    title: "Louie Vuiton Bag",
    price: 149.99,
    rating: 4.7,
    image: "/e-commerce-assets/lv-bag.jpg",
    category: "Accessories",
    description: "Stylish and luxurious Louie Vuiton bag",
  },
];

export default function ProductsPage() {
  return (
    <div className="flex items-center justify-center px-4 md:px-6 py-2">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Filters Sidebar */}
        <aside className="w-full flex flex-col md:w-64 space-y-6 mr-12">
          <div>
            <h3 className="font-semibold text-lg mt-14 mb-6">Categories</h3>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={category} />
                  <label htmlFor={category} className="text-sm">
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Price Range</h3>
            <Slider
              defaultValue={[0, 1000]}
              max={1000}
              step={1}
              className="w-full"
            />
            <div className="flex justify-between mt-2">
              <span className="text-sm">$0</span>
              <span className="text-sm">$1000</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Sort By</h3>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </aside>

        {/* Products Grid */}
        <div className="flex flex-col w-full">
          <div className="flex w-full items-center mb-6">
            <h2 className="text-2xl font-bold w-full flex">All Products</h2>
            <div className="w-full flex justify-end">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="aspect-square relative">
                    <Image
                      src={product.image}
                      alt={product.title}
                      layout="fill"
                      className="object-cover w-full h-full"
                      fill
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <Badge className="mb-2">{product.category}</Badge>
                  <h3 className="font-semibold truncate">{product.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-lg font-bold">${product.price}</span>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 fill-current text-yellow-400" />
                      <span className="ml-1 text-sm">{product.rating}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full">Add to Cart</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}