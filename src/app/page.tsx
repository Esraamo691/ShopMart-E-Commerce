import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="conatiner flex justify-center items-center h-[80vh]">
        <div className=" text-center ">
          <h1 className="text-6xl font-bold mb-3">Welcome To ShopMart</h1>
          <p className="text-2xl w-[75%] mx-auto mt-4 text-gray-600">
            Discover the latest technology, fashion, and lifestyle products.
            Quality guaranteed with fast shipping and excellent customer
            service.
          </p>
          <div className="gap-3 flex justify-center mt-10">
            <Link href={"/products"}>
              <Button className=" cursor-pointer p-6 text-xl">Shop Now</Button>
            </Link>
            <Link href={"/categories"}>
              <Button
                variant="outline"
                className="cursor-pointer text-xl p-6 border-2 border-black"
              >
                Browse Categories
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
