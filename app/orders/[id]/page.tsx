import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Package,
  Truck,
  CheckCircle2,
  ArrowLeft,
  MapPin,
  Clock,
  Star,
} from "lucide-react";

// Mock order data
const orders = [
  {
    id: "ORD-123456",
    date: "2024-03-15 14:30",
    status: "In Transit",
    total: 259.97,
    items: [
      {
        id: 1,
        title: "Premium Wireless Headphones",
        price: 199.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
      },
      {
        id: 2,
        title: "Organic Cotton T-Shirt",
        price: 29.99,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
      }
    ],
    tracking: {
      number: "TRK789012345",
      carrier: "FedEx",
      estimatedDelivery: "2024-03-18",
      currentLocation: "Distribution Center, Chicago",
      updates: [
        {
          date: "2024-03-15 14:30",
          status: "Order Placed",
          location: "Online"
        },
        {
          date: "2024-03-15 16:45",
          status: "Order Confirmed",
          location: "Seller Warehouse"
        },
        {
          date: "2024-03-16 09:15",
          status: "Package Picked Up",
          location: "Seller Warehouse"
        },
        {
          date: "2024-03-16 15:30",
          status: "In Transit",
          location: "Distribution Center, Chicago"
        }
      ]
    },
    shipping: {
      address: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      country: "United States"
    }
  },
  // Add more orders here if needed
];

export default function OrderTrackingPage({ params }: { params: { id: string } }) {
  const orderDetails = orders.find((order) => order.id === params.id);

  if (!orderDetails) {
    return <div>Order not found</div>;
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Order Placed":
        return <Package className="h-5 w-5" />;
      case "In Transit":
        return <Truck className="h-5 w-5" />;
      case "Delivered":
        return <CheckCircle2 className="h-5 w-5" />;
      default:
        return <Clock className="h-5 w-5" />;
    }
  };

  return (
    <div className="container px-4 md:px-6 py-8">
      <Link href="/orders" className="inline-flex items-center text-sm mb-6 hover:text-primary">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Orders
      </Link>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          {/* Order Status */}
          <Card>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>Order {orderDetails.id}</CardTitle>
                  <CardDescription>Placed on {orderDetails.date}</CardDescription>
                </div>
                <Badge variant="secondary">{orderDetails.status}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Tracking Timeline */}
                <div className="relative">
                  {orderDetails.tracking.updates.map((update, index) => (
                    <div key={index} className="flex gap-4 pb-8 last:pb-0">
                      <div className="flex flex-col items-center">
                        <div className="rounded-full p-2 bg-primary/10 text-primary">
                          {getStatusIcon(update.status)}
                        </div>
                        {index !== orderDetails.tracking.updates.length - 1 && (
                          <div className="w-px h-full bg-border mt-2" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium">{update.status}</p>
                        <p className="text-sm text-muted-foreground">{update.date}</p>
                        <p className="text-sm text-muted-foreground">{update.location}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tracking Info */}
                <div className="bg-muted/50 p-4 rounded-lg space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Tracking Number:</span>
                    <span className="text-sm">{orderDetails.tracking.number}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Carrier:</span>
                    <span className="text-sm">{orderDetails.tracking.carrier}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">Estimated Delivery:</span>
                    <span className="text-sm">{orderDetails.tracking.estimatedDelivery}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Order Items */}
          <Card>
            <CardHeader>
              <CardTitle>Order Items</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {orderDetails.items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        Quantity: {item.quantity}
                      </p>
                      <p className="font-medium mt-1">${item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Shipping and Summary */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Shipping Address</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <div>
                  <p>{orderDetails.shipping.address}</p>
                  <p>
                    {orderDetails.shipping.city}, {orderDetails.shipping.state}{" "}
                    {orderDetails.shipping.zipCode}
                  </p>
                  <p>{orderDetails.shipping.country}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${orderDetails.total}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${orderDetails.total}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return orders.map((order) => ({
    id: order.id,
  }));
}