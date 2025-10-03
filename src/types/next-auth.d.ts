import { UserResponse } from "@/interfaces";
import NextAuth, { User } from "next-auth";
import { JWT } from "next-auth/jwt";
declare module "next-auth" {
  interface Session {
    user: UserResponse;
    token: string; 
  }

  interface User {
    user: UserResponse;
    token: string;
  }
}

declare module "next-auth/jwt"{
    interface JWT extends User{

    }
}