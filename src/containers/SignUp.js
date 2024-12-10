import React, { useState } from "react";
import { Logo } from "../assets";
import { UserAuthInput } from "../components";
import { FaEnvelope } from "react-icons/fa6";
import { MdPassword } from "react-icons/md";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="w-full py-6 ">
      <img
        src={Logo}
        className="object-contain w-32 opacity-50 h-auto"
        alt=""
      />
      <div className=" w-full flex flex-col items-center justify-center py-2">
        <p className=" py-6 text-2xl text-primaryText">Join With Us!!!</p>

        <div className=" px-8 w-full md:w-auto py-4 rounded-xl bg-secondary shadow-md flex flex-col items-center justify-center gap-6">
          {/* email */}
          <UserAuthInput
            label="Email"
            placeHolder="Type Email Here"
            isPass={false}
            key="Email"
            setStateFunction={setEmail}
            Icon={FaEnvelope}
          />
          {/* password */}
          <UserAuthInput
            label="Password"
            placeHolder="Password"
            isPass={true}
            key="Password"
            setStateFunction={setPassword}
            Icon={MdPassword}
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
