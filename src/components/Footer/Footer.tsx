import React from "react";

export default function Footer() {
  return (
    <>
     <div className=" border-t-gray-300 border-t-1">
         <div className="container flex mx-auto py-8">
        <div className="w-[20%] ">
          <div className="flex gap-3 mb-4">
            <div className=" w-10 h-10 bg-black text-xl text-accent flex justify-center items-center">
              T
            </div>
            <h1 className=" font-bold">ShopMart</h1>
          </div>
          <p className="mb-5 text-gray-600">
            Your one-stop destination for the latest technology,fashion, and
            lifestyle products. Quality guaranteed with fast shipping and
            excellent customer service.
          </p>
          <p className="flex gap-1.5 mb-3 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            123 Shop Street, Octoper City,DC 12345
          </p>
          <p className="flex gap-2 mb-3 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            (+20) 01093333333
          </p>
          <p className="flex gap-2 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            support@shopmart.com
          </p>
        </div>

        <div className="w-[20%] ps-7">
          <h1 className=" font-bold text-[16px] uppercase mb-4">Shop</h1>
          <ul className="flex flex-col gap-y-3 text-gray-600">
            <li>Electronics</li>
            <li>Fashion</li>
            <li>Home & Garden</li>
            <li>Sports</li>
            <li>Deals</li>
          </ul>
        </div>
        <div className="w-[20%]">
          <h1 className=" font-bold text-[16px]  uppercase  mb-4">Customer Services</h1>
          <ul className="flex flex-col gap-y-3 text-gray-600">
            <li>Contact Us</li>
            <li>Help Center</li>
            <li>Track Your Order</li>
            <li>Returns & Exchanges</li>
            <li>Size Guide</li>
          </ul>
        </div>
        <div className="w-[20%]">
          <h1 className=" font-bold text-[16px] mb-4 uppercase">ABOUT </h1>
          <ul className="flex flex-col gap-y-3 text-gray-600">
            <li>About Shopmart</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Investor Relations</li>
            <li>Sustainability</li>
          </ul>
        </div>
        <div className="w-[20%]">
          <h1 className=" font-bold text-[16px] mb-4 uppercase">polices </h1>
          <ul className="flex flex-col gap-y-3 text-gray-600">
            <li>Privacy Policy</li>
            <li>Terms of Services</li>
            <li>Cookie Policy</li>
            <li>Shipping Policy</li>
            <li>Refund Policy</li>
          </ul>
        </div>
      </div>
     </div>
    </>
  );
}
