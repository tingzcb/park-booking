import { AlertDialogDemo } from "@/components/AlertDialogDemo";
import { CheckboxDemo } from "@/components/Checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Props = {};

const details = (props: Props) => {
  return (
    <div className="pl-24 grid gap-y-4">
      <h1 className="py-4 text-3xl font-semibold">DETAILS</h1>
      <p className="text-2xl font-semibold">Vehicle Details</p>
      <p className="text-base font-semibold">License Plate</p>
      <p className="text-base font-semibold">State</p>
      <p className="font-light">
        Please carefully check your vehicle's license plate details are correct.
        An in correct license plate could result in your access being denied.
      </p>
      <p className="text-base font-semibold">Access</p>
      <p className="font-light">
        Your license plate as the main access device, however you also have a
        back up in the form of a QR code which will need to be used if your
        license plate is not correct read.
      </p>
      <p className="text-base font-semibold">
        QR Code - Important secondary access device.
      </p>
      <p className="font-light">
        Your QR code(s) can be found on the email confirmation, please ensure
        you have your QR code ready at both the entry and exist if your lisence
        plate doesn't open the boom gates.
      </p>
      <CheckboxDemo></CheckboxDemo>
      <AlertDialogDemo></AlertDialogDemo>
      <div className="py-8 flex space-x-4 ">
        <Button
          className=" text-orange-600 font-bold rounded-full px-4 py-2"
          variant="outline"
        >
          CANCEL
        </Button>
        <Button
          className=" text-orange-600 font-bold rounded-full px-4 py-2"
          variant="outline"
        >
          <Link href="/"> &lt; BACK</Link>
        </Button>

        <Button
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full px-4 py-2 "
          asChild
        >
          <Link href="/final">NEXT</Link>
        </Button>
      </div>
    </div>
  );
};

export default details;
