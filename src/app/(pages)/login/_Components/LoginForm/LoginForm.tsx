// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { signIn } from "next-auth/react";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Card } from "@/components/ui/card";
// import { useSearchParams } from "next/navigation";
// import { useState } from "react";
// import { Loader2 } from "lucide-react";

// const formSchema = z.object({
//   email: z.email("Invalid Email").nonempty("Email Is Requiered"),
//   password: z
//     .string("Invalid Password")
//     .nonempty("Password Is Requiered")
//     .regex(
//       /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//       "Invalid Password"
//     ),
// });
// type FormFields = z.infer<typeof formSchema>;
// export function LoginForm() {
//   let searchParams = useSearchParams();
//   const callbackUrl = searchParams.get("callback-url");

//   const [isLoading, setisLoading] = useState<boolean>(false);
//   const form = useForm<FormFields>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   // 2. Define a submit handler.
//   async function onSubmit(values: FormFields) {
//     setisLoading(true);
//     const response = await signIn("credentials", {
//       callbackUrl: callbackUrl ?? "/",
//       redirect: true,
//       email: values.email,
//       password: values.password,
//     });
//     setisLoading(false);
//   }

//   return (
//     <Card className="p-6 w-sm">
//       <Form {...form}>
//         {searchParams.get("error") ? (
//           <h1 className="text-destructive text-2xl text-center py-3">
//             {searchParams.get("error")}
//           </h1>
//         ) : (
//           ""
//         )}
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//           <FormField
//             control={form.control}
//             name="email"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Email</FormLabel>
//                 <FormControl>
//                   <Input
//                     placeholder="abc@example.com"
//                     type="email"
//                     {...field}
//                   />
//                 </FormControl>

//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <FormField
//             control={form.control}
//             name="password"
//             render={({ field }) => (
//               <FormItem>
//                 <FormLabel>Password</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Abc@123" type="password" {...field} />
//                 </FormControl>

//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <Button
//             disabled={isLoading}
//             className="cursor-pointer w-full"
//             type="submit"
//           >
//             {isLoading && <Loader2 className="animate-spin" />} Submit
//           </Button>
//         </form>
//       </Form>
//     </Card>
//   );
// }
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  email: z.string().email("Invalid email").nonempty("Email is required"),
  password: z.string().nonempty("Password is required"),
});

type FormFields = z.infer<typeof formSchema>;

export function LoginForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormFields>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "", password: "" },
  });

  async function onSubmit(values: FormFields) {
    setErrorMessage("");
    setIsLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
    });

    setIsLoading(false);

    if (res?.error) {
      // ❌ عرض رسالة الخطأ
      setErrorMessage("Invalid email or password");
      return;
    }

    // ✅ نجاح
    router.push("/");
  }

  return (
    <Card className="p-6 w-[350px] text-[#A31D1D] shadow-md">
      <h2 className="text-center text-2xl font-semibold mb-6">Login</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="example@email.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="••••••••" type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {errorMessage && (
            <p className="text-red-500 text-sm text-center">{errorMessage}</p>
          )}

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading && <Loader2 className="animate-spin mr-2" />}
            Login
          </Button>

          <div className="text-center mt-3">
            <Link
              href="/forgetPassword"
              className="text-[#A31D1D] hover:underline text-sm"
            >
              Forget Password?
            </Link>
          </div>
        </form>
      </Form>
    </Card>
  );
}
