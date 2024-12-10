import React, { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa6";
import { motion } from "framer-motion";

const UserAuthInput = ({
  label,
  placeHolder,
  isPass,
  setStateFunction,
  Icon,
}) => {
  const [value, setValue] = useState("");
  //const [showPass, setShowPass] = useState(true);
  //const [isValid, setIsValid] = useState(false);

  //   const handleTextChange = (e) => {
  //     setValue(e.target.value);
  //     setStateFunction(e.target.value);

  //     if (label === "Email") {
  //       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //       const status = emailRegex.test(value);
  //       setIsValid(status);
  //       setGetEmailValidationStatus(status);
  //     }
  //   };

  return (
    <div className=" flex flex-col items-start justify-start gap-1">
      <label className=" text-sm text-gray-300">{label}</label>
      <div
        className={`flex items-center justify-center gap-3 w-full md:w-96 rounded-md px-4 py-1 bg-gray-200`}
      >
        <Icon className=" text-text555 text-2xl" />
        <input
          type={isPass ? "password" : "text"}
          placeholder={placeHolder}
          className=" flex-1 w-full h-full py-2 outline-none border-none bg-transparent text-text555 text-lg"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {isPass && (
          <div className="cursor-pointer">
            <FaEye className=" text-text555 text-2xl" />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserAuthInput;
