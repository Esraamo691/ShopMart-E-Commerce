
import { ProductI } from "@/interfaces/product";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "@/components/AddToCart/AddToCart";
import AddToWishlist from "@/components/AddToWishlist/AddToWishlist";
import StarIcon from "@/components/icons/starIcon";

export default async function Products({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  // ✅ نقرأ الـcategory من الـURL
  const categoryId = searchParams?.category;

  // ✅ نعمل الفيتش بناءً على الـcategoryId
  const apiUrl = categoryId
    ? `https://ecommerce.routemisr.com/api/v1/products?category=${categoryId}`
    : `https://ecommerce.routemisr.com/api/v1/products`;

  const response = await fetch(apiUrl, {
    next: { revalidate: 10 * 60 },
  });

  const { data: products }: { data: ProductI[] } = await response.json();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 mb-10">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div key={product.id}>
              <Card className="relative  transition-shadow duration-300">
                <AddToWishlist productId={product.id} />
                <Link href={`/products/${product.id}`}>
                  <Image
                    src={product.imageCover}
                    className="w-full rounded-t-xl object-cover"
                    width={300}
                    height={300}
                    alt={product.title}
                  />
                  <CardHeader>
                    <CardTitle className="line-clamp-2">
                      {product.title.split(" ", 2).join(" ")}
                    </CardTitle>
                    <CardDescription>{product.category.name}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-between items-center">
                    <div className="flex gap-1 items-center ">
                      <StarIcon />
                      <p className="text-sm font-medium text-gray-600">
                        {product.ratingsAverage}
                      </p>
                    </div>
                    <p className="font-bold ">
                      {product.price} EGP
                    </p>
                  </CardContent>
                </Link>
                <AddToCart productId={product.id} />
              </Card>
            </div>
          ))
        ) : (
          <div className="col-span-full flex justify-center items-center min-h-[50vh]">
            <p className="text-lg font-medium text-gray-500">
              No products found for this category.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
