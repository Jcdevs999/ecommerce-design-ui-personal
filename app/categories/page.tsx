"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { categories } from "@/lib/data";
import Link from "next/link";

export default function CategoriesPage() {
  return (
    <div className="flex flex-col w-full px-4 md:px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Shop by Category</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Link
              key={category.name}
              href={`/categories/${category.name
                .toLowerCase()
                .replace(/ & /g, "-")}`}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center space-y-0 pb-2">
                  <Icon className="w-8 h-8 text-primary mr-2" />
                  <CardTitle>{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {category.count} products
                  </p>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
