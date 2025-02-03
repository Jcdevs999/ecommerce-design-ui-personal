import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ProductCardProps {
  name: string;
  price: number;
  image: string;
}

export function ProductCard({ name, price, image }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-0">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          width={300}
          height={200}
          className="w-full h-48 object-cover"
        />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-lg">{name}</CardTitle>
        <p className="text-sm text-muted-foreground mt-2">${price}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
