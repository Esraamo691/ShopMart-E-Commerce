import React from 'react'

export default function Loading() {
  return (
      <div className='flex flex-col justify-center items-center min-h-screen'>
        <div className="flex gap-3 mb-4">
            <div className=" w-10 h-10 bg-black text-2xl text-accent flex justify-center items-center">
              s
            </div>
            <h1 className=" font-bold">ShopMart</h1>
          </div>
          <div  className="loader mt-4"></div>
    </div>
  )
}
