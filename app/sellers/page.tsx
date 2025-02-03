"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Store, ShoppingBag, Users, TrendingUp, Shield } from "lucide-react"

export default function BecomeSellerPage() {
  return (
    <div className="flex w-full px-4 md:px-6 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Become a Seller on ShopSmart</h1>
          <p className="text-xl text-muted-foreground">
            Join thousands of successful sellers and grow your business with us
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Store className="w-8 h-8 text-primary mb-2" />
              <CardTitle>5M+</CardTitle>
              <CardDescription>Active Sellers</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <ShoppingBag className="w-8 h-8 text-primary mb-2" />
              <CardTitle>$2B+</CardTitle>
              <CardDescription>Annual Sales</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Users className="w-8 h-8 text-primary mb-2" />
              <CardTitle>50M+</CardTitle>
              <CardDescription>Active Buyers</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Why Sell on ShopSmart?</CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <TrendingUp className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Reach Millions</h3>
                <p className="text-muted-foreground">
                  Access our vast customer base and grow your business exponentially
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <Shield className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">Secure Platform</h3>
                <p className="text-muted-foreground">
                  Benefit from our secure payment system and seller protection
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ready to Start Selling?</CardTitle>
            <CardDescription>
              Complete your registration in just a few minutes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Business Name</label>
                <input
                  type="text"
                  className="w-full mt-1 p-2 border rounded-md"
                  placeholder="Your business name"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full mt-1 p-2 border rounded-md"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <Button className="w-full">Register as Seller</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}