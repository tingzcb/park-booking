"use client";

import { AlertDialogDemo } from "@/components/AlertDialogDemo";
import { CheckboxDemo } from "@/components/Checkbox";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import { z } from "zod";

const details = () => {
  const [licensePlate, setLicensePlate] = useState(""); // 状态管理车牌号
  const [error, setError] = useState(""); // 错误提示状态
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false); // 复选框状态
  const [selectedState, setSelectedState] = useState(""); // 管理州选择

  const [isCreatingAccount, setIsCreatingAccount] = useState(false); // 是否创建账户或登录
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const states = [
    "New South Wales (NSW)",
    "Victoria (VIC)",
    "Queensland (QLD)",
    "South Australia (SA)",
    "Western Australia (WA)",
    "Tasmania (TAS)",
    "Northern Territory (NT)",
    "Australian Capital Territory (ACT)"
  ];

  const schema = z
    .object({
      firstName: z.string().min(1, "First name is required"),
      lastName: z.string().min(1, "Last name is required"),
      phoneNumber: z
        .string()
        .regex(/^\d{10}$/, "Phone number must be 10 digits"),
      email: z.string().email("Invalid email address"),
      password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .optional(),
      confirmPassword: z.string().optional()
    })

    .superRefine((data, ctx) => {
      if (
        data.password &&
        data.confirmPassword &&
        data.password !== data.confirmPassword
      ) {
        ctx.addIssue({
          path: ["confirmPassword"],
          message: "Passwords must match",
          code: "custom"
        });
      }
    });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLicensePlate(e.target.value);
    if (error) setError(""); // 用户输入时清除错误
  };

  const handleStateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
    if (error) setError(""); // 清除错误提示
  };

  const handleCheckboxChange = (e: any) => {
    setIsCheckboxChecked(e.target.checked);
    if (error) setError(""); // 清除错误提示
  };

  const handleNextClick = (e: any) => {
    if (
      !licensePlate.trim()

      // ||
      // !selectedState ||
      // !isCheckboxChecked ||
      // !validateForm()
    ) {
      e.preventDefault(); // 阻止默认跳转行为
      setError("Please complete all fields and agree to the terms."); // 设置错误提示
    } else {
      localStorage.setItem("licensePlate", licensePlate.trim());
      localStorage.setItem("selectedState", selectedState);
      console.log("License Plate saved:", licensePlate);
      console.log("Selected State:", selectedState);
    }
  };

  const validateForm = () => {
    try {
      schema.parse({
        firstName,
        lastName,
        phoneNumber,
        email,
        password: isCreatingAccount ? password : undefined,
        confirmPassword: isCreatingAccount ? confirmPassword : undefined
      });
      setError("");
      return true;
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message); // Combine all error messages
      }
      return false;
    }
  };

  return (
    <div className="mx-3 grid gap-y-4">
      <h1 className="py-4 text-3xl font-semibold">DETAILS</h1>
      <p className="text-2xl font-semibold">Vehicle Details</p>
      <p className="text-base font-semibold">License Plate</p>
      {/* 车牌输入框 */}
      <input
        type="text"
        value={licensePlate}
        onChange={handleInputChange}
        placeholder="Enter your license plate"
        className={`border p-2 rounded w-64 ${
          error && !licensePlate ? "border-red-500" : "border-gray-300"
        }`}
      />
      <p className="text-base font-semibold">State</p>
      {/* 州选择下拉框 */}
      <select
        value={selectedState}
        onChange={handleStateChange}
        className={`border p-2 rounded w-64 ${
          error && !selectedState ? "border-red-500" : "border-gray-300"
        }`}
      >
        <option value="" disabled>
          Select a state
        </option>
        {/* 遍历多个洲子元素 option */}
        {states.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>

      <p className="font-light">
        Please carefully check your vehicle&apos;s license plate details are
        correct. An in correct license plate could result in your access being
        denied.
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
        plate doesn&apos;t open the boom gates.
      </p>

      <p className="text-2xl font-semibold mt-8">Account Details</p>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
        className="border p-2 rounded w-64"
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
        className="border p-2 rounded w-64 mt-2"
      />
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        placeholder="Phone Number"
        className="border p-2 rounded w-64 mt-2"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        className="border p-2 rounded w-64 mt-2"
      />

      <div className="flex items-center mt-4">
        <input
          type="checkbox"
          id="createAccount"
          checked={isCreatingAccount}
          onChange={(e) => setIsCreatingAccount(e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="createAccount" className="text-base font-semibold">
          Create Account / Login
        </label>
      </div>

      {isCreatingAccount && (
        <>
          <p className="text-red-500 text-sm mt-2">
            Password must be at least 8 characters
          </p>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border p-2 rounded w-64 mt-2"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="border p-2 rounded w-64 mt-2"
          />
        </>
      )}

      <div className="flex items-center mt-4">
        <input
          type="checkbox"
          id="agreement"
          checked={isCheckboxChecked}
          onChange={handleCheckboxChange}
          className="mr-2"
        />
        <label htmlFor="agreement" className="text-base font-semibold">
          I agree to the terms and conditions
        </label>
      </div>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

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
          onClick={handleNextClick} // 添加点击事件
          asChild
        >
          <Link href="/final">NEXT</Link>
        </Button>
      </div>
    </div>
  );
};

export default details;
