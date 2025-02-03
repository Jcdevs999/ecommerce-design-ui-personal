"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Percent } from "lucide-react"
import Image from "next/image"

const deals = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    originalPrice: 99.99,
    discountedPrice: 149.99,
    discount: 25,
    image: "/e-commerce-assets/headset.jpg",
    endsIn: "2d 15h",
  },
  {
    id: 2,
    title: "Smart Watch Series X",
    originalPrice: 299.99,
    discountedPrice: 249.99,
    discount: 17,
    image: "/e-commerce-assets/smart-watch.jpg",
    endsIn: "1d 8h",
  },
  {
    id: 3,
    title: "Louie Vuiton Bag",
    originalPrice: 299.99,
    discountedPrice: 149.99,
    discount: 17,
    image: "/e-commerce-assets/lv-bag.jpg",
    endsIn: "1d 8h",
  },
  {
    id: 4,
    title: "Quality Cotton T-Shirt",
    originalPrice: 149.99,
    discountedPrice: 99.99,
    discount: 17,
    image: "/e-commerce-assets/tshirt.jpg",
    endsIn: "1d 8h",
  },
];

export default function DealsPage() {
  return (
    <div className="flex flex-col w-full px-4 md:px-6 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Today&apos;s Deals</h1>
        <Badge variant="secondary" className="text-sm">
          <Clock className="w-4 h-4 mr-1" /> Limited Time Offers
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {deals.map((deal) => (
          <Card key={deal.id} className="overflow-hidden">
            <div className="aspect-square relative">
              <Image
                src={deal.image}
                alt={deal.title}
                layout="fill"
                objectFit="cover"
                className="object-cover w-full h-full"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-red-500">-{deal.discount}%</Badge>
              </div>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold truncate">{deal.title}</h3>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-2xl font-bold">
                  ${deal.discountedPrice}
                </span>
                <span className="text-sm line-through text-muted-foreground">
                  ${deal.originalPrice}
                </span>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-1" />
                  Ends in {deal.endsIn}
                </div>
                <Button>Add to Cart</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}