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
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import {
  DollarSign,
  Package,
  ShoppingCart,
  Users,
  TrendingUp,
  BarChart3,
  Box,
  Settings,
} from "lucide-react"
import Image from "next/image"

// Mock data
const salesData = [
  { date: "2024-03-10", sales: 2100 },
  { date: "2024-03-11", sales: 3200 },
  { date: "2024-03-12", sales: 2800 },
  { date: "2024-03-13", sales: 4200 },
  { date: "2024-03-14", sales: 3800 },
  { date: "2024-03-15", sales: 4800 },
  { date: "2024-03-16", sales: 4100 },
]

const recentOrders = [
  {
    id: "ORD-789",
    customer: "Sweet Delacruz",
    date: "2024-03-16",
    status: "Processing",
    total: 299.99
  },
  {
    id: "ORD-788",
    customer: "Jan Garcia",
    date: "2024-03-16",
    status: "Shipped",
    total: 159.99
  },
  {
    id: "ORD-787",
    customer: "Michael Legazpi",
    date: "2024-03-15",
    status: "Delivered",
    total: 89.99
  }
]

const lowStockProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    stock: 5,
    threshold: 10,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
  },
  {
    id: 2,
    name: "Smart Watch",
    stock: 3,
    threshold: 8,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80"
  },
  {
    id: 3,
    name: "Smart Watch",
    stock: 3,
    threshold: 8,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80"
  }
]

export default function SellerDashboardPage() {
  return (
    <div className="flex w-full px-4 md:px-6 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-64 space-y-4">
          <Card>
            <CardContent className="p-4">
              <div className="space-y-4">
                <Button variant="ghost" className="w-full justify-start">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Box className="mr-2 h-4 w-4" />
                  Products
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Orders
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Customers
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Analytics
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
        <main className="flex flex-col w-full">
          <h1 className="text-3xl font-bold mb-8">Seller Dashboard</h1>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$12,345</div>
                <p className="text-xs text-muted-foreground">
                  +15% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Orders</CardTitle>
                <Package className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">156</div>
                <p className="text-xs text-muted-foreground">
                  +8% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Customers</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,345</div>
                <p className="text-xs text-muted-foreground">
                  +12% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.2%</div>
                <p className="text-xs text-muted-foreground">
                  +0.5% from last month
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sales Chart */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Sales Overview</CardTitle>
              <CardDescription>Daily sales for the past week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="date"
                      tickFormatter={(value) => new Date(value).toLocaleDateString()}
                    />
                    <YAxis />
                    <Tooltip />
                    <Line
                      type="monotone"
                      dataKey="sales"
                      stroke="hsl(var(--primary))"
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Recent Orders */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Latest customer orders</CardDescription>
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
                          {order.customer} • {order.date}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${order.total}</p>
                        <p className="text-sm text-muted-foreground">
                          {order.status}
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

            {/* Low Stock Alert */}
            <Card>
              <CardHeader>
                <CardTitle>Low Stock Alert</CardTitle>
                <CardDescription>Products that need reordering</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {lowStockProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center gap-4 p-4 border rounded-lg"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        height={64}
                        width={64}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium">{product.name}</h3>
                        <p className="text-sm text-destructive">
                          Only {product.stock} items left
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Reorder threshold: {product.threshold}
                        </p>
                      </div>
                      <Button size="sm">Reorder</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}