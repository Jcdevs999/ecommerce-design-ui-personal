
import { ProductCard } from "@/components/product-card";
import { categories, products } from "@/lib/data";
import { notFound } from "next/navigation";

export default function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const category = categories.find(
    (c) => c.name.toLowerCase().replace(/ & /g, "-") === params.category
  );

  if (!category) {
   return notFound();
  }

  const categoryProducts = products.filter(
    (product) => product.category === category.name
  );

  return (
    <div className="flex flex-col w-full px-4 md:px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">{category.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categoryProducts.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.name.toLowerCase().replace(/ & /g, "-"),
  }));
}