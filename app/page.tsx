"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, Clock, Tag } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const featuredProducts = [
    {
      id: 1,
      title: "Razer Wireless Headset", 
      price: 99.99,
      rating: 4.8,
      image: "/e-commerce-assets/headset.jpg",
      category: "Electronics",
    },
    {
      id: 2,
      title: "Quality Cotton T-Shirt",
      price: 19.99,
      rating: 4.5,
      image: "/e-commerce-assets/tshirt.jpg",
      category: "Fashion",
    },
    {
      id: 3,
      title: "Smart Watch Series X",
      price: 299.99,
      rating: 4.9,
      image: "/e-commerce-assets/smart-watch.jpg",
      category: "Electronics",
    },
    {
      id: 4,
      title: "Louie Vuiton Bag",
      price: 149.99,
      rating: 4.7,
      image: "/e-commerce-assets/lv-bag.jpg",
      category: "Accessories",
    },
  ];

  return (
    <div className="flex flex-col gap-8 py-8">
      <section className="w-full flex px-4 md:px-6">
        <motion.div
          className="relative rounded-lg overflow-hidden w-full h-[500px]"
          variants={textVariant}
          initial="hidden"
          animate="visible"
          style={{
            backgroundImage: 'url("/ecommerce-assets/jordan-shoes.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-gray-200 w-full p-8 md:p-12 lg:px-16 lg:py-24 opacity-90 rounded-lg">
            <div className="flex flex-col justify-center items-start space-y-4 max-w-3xl">
              <h1 className="text-3xl md:text-5xl font-bold text-black">
                Discover Amazing Deals on{" "}
                <span className="bg-gradient-to-r from-orange-600 to-orange-300 bg-clip-text text-transparent">
                  Premium Products
                </span>
              </h1>
              <p className="text-lg md:text-sm text-muted-foreground text-gray-700">
                Shop the latest trends with confidence. Free shipping on orders
                over $50.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-orange-400 text-white"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <motion.section
        className="px-4 md:px-6 flex justify-center w-full"
        variants={textVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="space-y-1">
              <TrendingUp className="w-8 h-8 text-primary" />
              <CardTitle className="text-lg">Trending</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Discover what&apos;s hot right now
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="space-y-1">
              <Star className="w-8 h-8 text-primary" />
              <CardTitle className="text-lg">Top Rated</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Best products by customer reviews
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="space-y-1">
              <Clock className="w-8 h-8 text-primary" />
              <CardTitle className="text-lg">Flash Sales</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Limited-time special offers
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="space-y-1">
              <Tag className="w-8 h-8 text-primary" />
              <CardTitle className="text-lg">Best Deals</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Unbeatable prices on top items
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* Featured Products */}
      <motion.section
        className="flex flex-col w-full px-4 md:px-6"
        variants={textVariant}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={textVariant}
              initial="hidden"
              animate="visible"
            >
              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <div className="aspect-square relative">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <Badge className="mb-2">{product.category}</Badge>
                  <h3 className="font-semibold truncate">{product.title}</h3>
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
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
