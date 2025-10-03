"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import React, { useContext } from "react";
import { Loader2, ShoppingCartIcon, UserIcon } from "lucide-react";
import { Badge } from "../ui/badge";
import { CartContext } from "../Context/CartContext";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { isLoading, cartData } = useContext(CartContext);
  const session = useSession();
  return (
    <>
      <nav className=" py-2 bg-gray-50 shadow text-2xl font-semibold  sticky z-50 top-0">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h1>
              <Link href={"/"}>ShopMart</Link>
            </h1>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/products">Products</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/categories">Categories</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/brands">Brands</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/wishlist">Whishlist</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/allorders">Orders</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center">
              {session.status == "authenticated" && (
                <h2 className="text-sm me-2">
                  Hello {session.data?.user.name}
                </h2>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger className=" outline-0">
                  <UserIcon />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {session.status == "authenticated" ? (
                    <>
                      <DropdownMenuItem
                        onClick={() =>
                          signOut({
                            callbackUrl: "/",
                          })
                        }
                      >
                        Logout
                      </DropdownMenuItem>
                    </>
                  ) : (
                    <>
                      <Link href={"/login"}>
                        <DropdownMenuItem>Login</DropdownMenuItem>
                      </Link>
                      <Link href={"/register"}>
                        <DropdownMenuItem>Register</DropdownMenuItem>
                      </Link>
                    </>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
              {session.status == "authenticated" && (
                <Link href={"/cart"} className=" relative p-3">
                  <ShoppingCartIcon />
                  <Badge className=" size-5 absolute top-0 end-0 rounded-full  ">
                    <span>
                      {isLoading ? (
                        <Loader2 className="animate-spin size-4" />
                      ) : (
                        cartData?.numOfCartItems
                      )}
                    </span>
                  </Badge>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
