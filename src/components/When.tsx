import React from "react";
import { Button, buttonVariants } from "./ui/button";
import { DatePickerDemo } from "./DatePicker";
import Link from "next/link";

type Props = {};

const When = (props: Props) => {
  return (
    <div className="pl-24 grid gap-y-4">
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
      <div className="py-8 flex space-x-4 ">
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

        {/* <Link href="/login" className={buttonVariants({ variant: "outline" })}>
          Click here 33eww
        </Link>

        <Button asChild>
          <Link href="/login">Login</Link>
        </Button> */}
      </div>
    </div>
  );
};

export default When;
