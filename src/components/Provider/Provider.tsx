"use client";

import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import CartContextProvider from "@/components/Context/CartContext";
import WishlistContextProvider from "@/components/Context/WishlistContext"; 
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export default function Provider({ children }: { children: ReactNode }) {
  return (
    <>
      <SessionProvider>
        <CartContextProvider>
          <WishlistContextProvider> 
            <Navbar />
            <div className="container py-4 mx-auto">
              <Toaster />
              {children}
            </div>
            <Footer />
          </WishlistContextProvider>
        </CartContextProvider>
      </SessionProvider>
    </>
  );
}
