"use client";

import React from "react";
import { WobbleCard } from "../ui/animatedWobble";

 
export function WobbleCardDemo() {
  return (
    <>

    <div
    id="gallery"
    className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full mt-[200px] max-sm:p-[10px]">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full  min-h-[500px] lg:min-h-[300px] bg-bg-2 max-sm:min-h-[100px]">

      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] max-sm:min-h-[200px]">
  
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]  bg-bg-1 max-sm:min-h-[100px]">
        <div className="max-w-sm ">
        </div>
      </WobbleCard>
    </div>

    </>
  );
}

export default WobbleCardDemo;