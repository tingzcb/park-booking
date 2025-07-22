"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { DatePickerDemo } from "./DatePicker";
import Link from "next/link";
import { MapProvider } from "@/utils/map-provider";
import { MapComponent } from "@/utils/map";
import { isBefore, isSameDay } from "date-fns";
import { useStepState } from "@/store";

const When = () => {
  const [startDate, setStartDate] = useState<Date | undefined>();
  const [endDate, setEndDate] = useState<Date | undefined>();
  const [startDateError, setStartDateError] = useState<string | null>(null);
  const [endDateError, setEndDateError] = useState<string | null>(null);

  const { nextStep, prevStep } = useStepState();

  // 禁用过去的日期
  const disablePastDates = (date: Date) => {
    const today = new Date();
    return isBefore(date, today) && !isSameDay(date, today);
  };

  // 禁用 End Date 小于或等于 Start Date
  const disableInvalidEndDates = (date: Date): boolean => {
    const today = new Date(); // 获取当前日期
    if (!startDate) {
      // 如果没有选定 Start Date，只禁用小于今天的日期
      return isBefore(date, today) && !isSameDay(date, today);
    }
    // 禁用日期小于今天或小于 Start Date
    return (
      (isBefore(date, today) && !isSameDay(date, today)) ||
      isBefore(date, startDate)
    );
  };
  const isNextButtonEnabled =
    startDate &&
    endDate &&
    (isBefore(startDate, endDate) || isSameDay(startDate, endDate));

  const validateDates = () => {
    const today = new Date();
    let hasError = false;

    if (!startDate) {
      setStartDateError("Start date is required.");
      hasError = true;
    } else if (isBefore(startDate, today)) {
      setStartDateError("Start date must be today or later.");
      hasError = true;
    } else {
      setStartDateError(null);
    }

    if (!endDate) {
      setEndDateError("End date is required.");
      hasError = true;
    } else if (startDate && isBefore(endDate, startDate)) {
      setEndDateError("End date must be after or the same as start date.");
      hasError = true;
    } else {
      setEndDateError(null);
    }

    return !hasError;
  };

  const handleSave = () => {
    if (validateDates()) {
      console.log("Start Date:", startDate);
      console.log("End Date:", endDate);
    }

    // 模拟保存到后端
    const data = {
      startDate,
      endDate
    };

    fetch("/api/save-dates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        if (response.ok) {
          console.log("Dates saved successfully");
          nextStep();
        } else {
          console.error("Failed to save dates");
        }
      })
      .catch((error) => console.error("Error saving dates:", error));
  };

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
          <p className="font-light">$10.00</p>
          <p className="text-base font-semibold">Start Date</p>
          <DatePickerDemo
            date={startDate}
            setDate={setStartDate}
            disabledDates={disablePastDates}
          ></DatePickerDemo>

          {startDateError && (
            <p className="text-red-600 text-sm mt-1">{startDateError}</p>
          )}
          <p className="text-base font-semibold">End Date</p>
          <DatePickerDemo
            date={endDate}
            setDate={setEndDate}
            disabledDates={disableInvalidEndDates}
          ></DatePickerDemo>
          {endDateError && (
            <p className="text-red-600 text-sm mt-1">{endDateError}</p>
          )}

          <p className="text-base font-semibold">Amount</p>
          <p className="text-base font-semibold">$0.00</p>
        </div>
        <div className="min-w-56  max-w-3xl px-4 md:w-[calc(100vw-24rem)] md:self-center ">
          <MapProvider>
            <p className="text-xl font-semibold pt-3 text-orange-600">
              19/33 Kent Rd, Mascot NSW 2020
            </p>
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
          onClick={handleSave}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full px-4 py-2 "
          asChild
        >
          <Link href={isNextButtonEnabled ? "/details" : "#"}>NEXT</Link>
        </Button>
      </div>
    </>
  );
};

export default When;
