import React from "react";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import QRCode from "react-qr-code";

const final = () => {
  return (
    <>
      <div className=" pt-10 ">
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
        <div className="flex justify-center pt-4">
          <QRCode
            size={256}
            value="145465465767"
            viewBox={`0 0 256 256`}
          ></QRCode>
        </div>
      </div>
    </>
  );
};

export default final;
