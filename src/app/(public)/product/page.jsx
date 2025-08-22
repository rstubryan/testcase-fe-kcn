"use client";

import { useEffect, useState } from "react";
import { Typography } from "@/components/atoms/typography/typography";
import { Card, CardHeader, CardContent } from "@/components/atoms/card/card";
import ProductLayout from "@/components/templates/product/product-layout";
import { Badge } from "@/components/atoms/badge/badge";
import { formatIDR } from "@/lib/utils";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/product");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <ProductLayout isLoading={loading}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader className="border-b border-gray-200">
              <Typography size="h4" className="font-semibold">
                {product.name}
              </Typography>
            </CardHeader>
            <CardContent className="space-y-2">
              <Typography size="h5" className="text-blue-600 font-bold">
                {formatIDR(product.price)}
              </Typography>
              <Typography variant="secondary" size="sm">
                Category: <Badge>{product.category}</Badge>
              </Typography>
              <Typography>{product.description}</Typography>
              <Typography>
                Status:{" "}
                {product.inStock ? (
                  <Badge variant={"success"}>In Stock</Badge>
                ) : (
                  <Badge variant={"destructive"}>Out of Stock</Badge>
                )}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </ProductLayout>
  );
}
