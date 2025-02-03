import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Star, Truck, Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/data"; // Assuming you have a data file with products

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

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
            alt={product.name}
            layout="fill"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge className="mb-2">{product.category}</Badge>
            <h1 className="text-3xl font-bold">{product.name}</h1>
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
  );
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}