import { getUserToken } from "@/Helpers/getUserToken";
import { NextResponse, NextRequest } from "next/server";

export async function DELETE(req: NextRequest, context: { params: Promise<{ productId: string }> }) {
  const { productId } = await context.params; // لاحظ إننا استخدمنا await هنا 👈

  const token = await getUserToken();

  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,
    {
      method: "DELETE",
      headers: {
        token: token + "",
      },
    }
  );

  const data = await response.json();
  return NextResponse.json(data);
}
