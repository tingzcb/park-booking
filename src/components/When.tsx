import React from "react";
import { Button } from "./ui/button";
import { DatePickerDemo } from "./DatePicker";
import Link from "next/link";
import { MapProvider } from "@/utils/map-provider";
import { MapComponent } from "@/utils/map";

const When = () => {
  return (
    <>
      <div className="md:flex justify-center  ">
        <div className=" grid gap-y-4 w-96 pl-3 ml-6 mr-8 ">
          <h1 className="py-4 text-4xl font-semibold">CHOOSE WHEN</h1>
          <p className="text-base font-semibold">Select the Car Park</p>
          <p className="font-light">528 Kent Street</p>
          <p className="text-base font-semibold">Product</p>
          <p className="font-light">Share with Oscar</p>
          <p className="text-base font-semibold">Cost</p>
          <p className="font-light">$0.00</p>
          <p className="text-base font-semibold">Start Date</p>
          <DatePickerDemo></DatePickerDemo>
          <p className="text-base font-semibold">End Date</p>
          <DatePickerDemo></DatePickerDemo>
          <p className="text-base font-semibold">Amount</p>
          <p className="text-base font-semibold">$0.00</p>
        </div>
        <div className="min-w-56  max-w-3xl px-4 md:w-[calc(100vw-24rem)] md:self-center ">
          <MapProvider>
            <MapComponent />
          </MapProvider>
        </div>
      </div>

      <div className="py-8 flex justify-center space-x-4     ">
        <Button
          className=" text-orange-600 font-bold rounded-full px-4 py-2"
          variant="outline"
        >
          CANCEL
        </Button>

        <Button
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full px-4 py-2 "
          asChild
        >
          <Link href="/details">NEXT</Link>
        </Button>
      </div>
    </>
  );
};

export default When;
