"use client"

import { useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Package,
  ShoppingBag,
  Heart,
  Settings,
  User,
  CreditCard,
  MapPin,
  Bell,
} from "lucide-react"
import Image from "next/image"

// Mock data
const recentOrders = [
  {
    id: "ORD-123",
    date: "2024-03-15",
    status: "Delivered",
    total: 199.99,
    items: 2
  },
  {
    id: "ORD-124",
    date: "2024-03-14",
    status: "Processing",
    total: 59.98,
    items: 1
  }
]

const wishlistItems = [
  {
    id: 1,
    title: "Smart Watch Series X",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80"
  },
  {
    id: 2,
    title: "Leather Crossbody Bag",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80"
  }
]

export default function DashboardPage() {
  return (
    <div className="flex flex-col w-full px-4 md:px-6 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="space-y-4">
                <Button variant="ghost" className="w-full justify-start">
                  <Package className="mr-2 h-4 w-4" />
                  Orders
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Heart className="mr-2 h-4 w-4" />
                  Wishlist
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Payment Methods
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <MapPin className="mr-2 h-4 w-4" />
                  Addresses
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Bell className="mr-2 h-4 w-4" />
                  Notifications
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </div>
            </CardContent>
          </Card>
        </aside>

        {/* Main Content */}
        <main className="flex-1 w-full">
          <h1 className="text-3xl font-bold mb-8">My Dashboard</h1>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Orders
                </CardTitle>
                <ShoppingBag className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">
                  +2 from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Spent
                </CardTitle>
                <CreditCard className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,234.56</div>
                <p className="text-xs text-muted-foreground">
                  +$123.45 from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Wishlist Items
                </CardTitle>
                <Heart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">2 items on sale</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="orders" className="space-y-4">
            <TabsList>
              <TabsTrigger value="orders">Recent Orders</TabsTrigger>
              <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            </TabsList>

            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Orders</CardTitle>
                  <CardDescription>
                    View and track your recent orders
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div
                        key={order.id}
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div>
                          <p className="font-medium">{order.id}</p>
                          <p className="text-sm text-muted-foreground">
                            {order.date} • {order.items} items
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">${order.total}</p>
                          <p className="text-sm text-muted-foreground">
                            {order.status}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="wishlist">
              <Card>
                <CardHeader>
                  <CardTitle>Wishlist</CardTitle>
                  <CardDescription>
                    Items you&apos;ve saved for later
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {wishlistItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex gap-4 p-4 border rounded-lg"
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={80}
                          height={80}
                          className="w-20 h-20 object-cover rounded"
                        />
                        <div className="flex flex-col w-full">
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-lg font-bold">${item.price}</p>
                          <div className="flex gap-4 mt-2 justify-end">
                            <Button
                              size="sm"
                              className="mt-2 items-center flex"
                            >
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}