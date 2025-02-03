"use client";

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Star, Truck, Shield, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image";

// Mock product data
const product = {
  id: 1,
  title: "Premium Wireless Headphones",
  price: 199.99,
  rating: 4.8,
  reviews: 245,
  image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
  category: "Electronics",
  description: "Experience premium sound quality with these wireless headphones. Featuring active noise cancellation, long battery life, and comfortable design.",
  features: [
    "Active Noise Cancellation",
    "40-hour battery life",
    "Quick charging - 5 mins for 2 hours playback",
    "Bluetooth 5.0",
    "Built-in voice assistant"
  ],
  specifications: {
    "Brand": "AudioTech",
    "Model": "WH-1000",
    "Color": "Midnight Black",
    "Connectivity": "Wireless",
    "Battery": "Lithium-ion",
    "Weight": "250g"
  }
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div className="container px-4 md:px-6 py-8">
      <Link href="/products" className="inline-flex items-center text-sm mb-6 hover:text-primary">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Products
      </Link>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.title}
            layout="fill"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge className="mb-2">{product.category}</Badge>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <div className="flex items-center mt-2 space-x-2">
              <div className="flex items-center">
                <Star className="w-5 h-5 fill-current text-yellow-400" />
                <span className="ml-1 font-medium">{product.rating}</span>
              </div>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
            </div>
          </div>

          <div>
            <span className="text-3xl font-bold">${product.price}</span>
            <p className="text-sm text-muted-foreground mt-1">Free shipping on orders over $50</p>
          </div>

          <div className="space-y-4">
            <Button size="lg" className="w-full">Add to Cart</Button>
            <Button size="lg" variant="outline" className="w-full">Add to Wishlist</Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card>
              <CardHeader className="space-y-1">
                <Truck className="w-5 h-5 text-primary" />
                <CardTitle className="text-sm">Free Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>On orders above $50</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="space-y-1">
                <Shield className="w-5 h-5 text-primary" />
                <CardTitle className="text-sm">2 Year Warranty</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Full coverage</CardDescription>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <p className="text-muted-foreground">{product.description}</p>
            </TabsContent>
            <TabsContent value="features" className="mt-4">
              <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="specifications" className="mt-4">
              <div className="space-y-2">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b">
                    <span className="font-medium">{key}</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}