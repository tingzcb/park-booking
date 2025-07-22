"use client";

import { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

interface CheckboxDemoProps {
  onCheckedChange: (isChecked: boolean) => void; // 回调函数，用于将状态传递到父组件
}

export function CheckboxDemo({ onCheckedChange }: CheckboxDemoProps) {
  const handleCheckboxChange = (e: any) => {
    onCheckedChange(e.target.checked); // 调用父组件传入的回调，传递复选框的状态
  };
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="terms"
        onChange={handleCheckboxChange} // 触发回调
      />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        I agree to the
        <Popover>
          <PopoverTrigger className="text-base text-blue-600 underline">
            Terms and Conditions.
          </PopoverTrigger>
          <PopoverContent>
            Parking TERMS OF USE This website it operated by ----- Any reference
            to ‘we’, ‘us’ or ‘our’ is a reference to Parking Pty Ltd ACN ----.
            ACCEPTANCE AND AMENDMENTS OF THESE TERMS OF USE We provide this
            website subject to these terms of use and by using this website, you
            are agreeing to be bound by these terms of use. If you do not accept
            these terms of use, you must refrain from using this website. We may
            change these terms of use at any time. Any amendments will take
            effect immediately upon notification on this website. APPLICATION OF
            THESE TERMS OF USE These terms of use apply to your use of this
            website, including any facilities and services accessible through
            it, including access to and use of our Express Parking membership.
            ACCESS You must ensure that your access to this website is not
            illegal or prohibited by laws. Your access to this website may be
            terminated at any time by us without notice to you. USE OF YOUR
            PERSONAL INFORMATION We will collect and use your personal your
            information, being information that can identify you, in order to
            provide our services to you, to seek your feedback and improve our
            service, to carry out management and administrative activities, to
            conduct research and to communicate with you. Unless otherwise
            directed by you, you consent to us using any of the information
            collected from you (including personal information) for marketing
            purposes. This includes but is not limited to sending you marketing
            material or providing your information to third parties who may send
            you marketing material We will collect and use your personal
            information in accordance with our Privacy Policy located here
            -------
          </PopoverContent>
        </Popover>
      </label>
    </div>
  );
}
