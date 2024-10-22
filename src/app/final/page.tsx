import React from "react";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";

const final = () => {
  return (
    <>
      <div className=" pt-10 ">
        <div className="flex justify-center">
          <TaskAltRoundedIcon className="bg-green-300 rounded-3xl size-[2rem] "></TaskAltRoundedIcon>
        </div>
        <div className="flex justify-center">
          {" "}
          <p className="text-base font-semibold">You're booked in!</p>
        </div>
        <div className="flex justify-center">
          {" "}
          <p className="font-light">
            An email confirming your permit has been sent to your email.
          </p>
        </div>
      </div>
    </>
  );
};

export default final;
