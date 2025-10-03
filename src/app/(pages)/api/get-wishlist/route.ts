
import { getUserToken } from "@/Helpers/getUserToken";
import { WishlistResponse } from "@/interfaces/Wishlist";
import { NextResponse } from "next/server";

export async function GET() {
  const token = await getUserToken ()
     const response = await fetch("https://ecommerce.routemisr.com/api/v1/wishlist", {
            method: "GET",
            headers: {
              token: token + ''
            },
          });
    
          const data: WishlistResponse = await response.json();
          return NextResponse.json(data)
}