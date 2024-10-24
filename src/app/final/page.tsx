import React from "react";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import QRCode from "react-qr-code";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";

const final = () => {
  return (
    <>
      <div className=" pt-10 px-3 ">
        <div className="flex justify-center">
          <TaskAltRoundedIcon className="bg-green-300 rounded-3xl size-[2rem] "></TaskAltRoundedIcon>
        </div>
        <div className="flex justify-center">
          {" "}
          <p className="text-base font-semibold">You&apos;re booked in!</p>
        </div>
        <div className="flex justify-center">
          {" "}
          <p className="font-light">
            An email confirming your permit has been sent to your email.
          </p>
        </div>

        <div className="py-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex space-x-6">
                <p className="text-base font-semibold">License Plate</p>
                <p className="text-xl font-semibold">DG 29 FM</p>
              </div>
              <div className="flex space-x-11">
                <p className="text-base font-semibold">Receipt No</p>
                <p className="font-light">42695300</p>
              </div>
              <div className="flex space-x-10">
                <p className="text-base font-semibold">Parking Lot</p>
                <p className="font-light">Mascot Meriton Parking</p>
              </div>
              {/* Start */}
              <div className="flex space-x-14">
                <p className="text-base font-semibold">Start Date</p>
                <p className="font-light">Mon, 10/12/24</p>
              </div>
              {/* End */}
              <div className="flex space-x-16">
                <p className="text-base font-semibold">End Date</p>
                <p className="font-light">Fri, 15/12/24</p>
              </div>
              <p className="text-base font-semibold">QR Code</p>{" "}
              <div className="flex justify-center py-4 ">
                <QRCode
                  size={256}
                  value="145465465767"
                  viewBox={`0 0 256 256`}
                ></QRCode>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default final;
