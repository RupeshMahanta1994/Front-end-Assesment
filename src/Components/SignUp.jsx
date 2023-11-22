import React from "react";

const SignUp = () => {
  //submit function to redirect to loch welcome site
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location = "https://app.loch.one/welcome";
  };
  return (
    <>
      <div>
        <h1 className="text-[#B0B1B3] mb-[16px] md:mb-[32px] text-[39px] leading-[120%]">
          Sign up for <br /> exclusive access.
        </h1>

        <form
          onSubmit={handleSubmit}
          className="w-full h-full flex flex-col space-y-[10px] md:space-y-[20px]"
        >
          <input
            required
            className="w-full rounded-lg px-[12px] md:px-[24px] py-[10px] md:py-[20px] text-sm md:text-base placeholder:text-[#CACBCC] font-medium  outline-none"
            type="email"
            placeholder="Your email address"
          />
          <button
            type="submit"
            className="w-full  h=[59px] rounded-[8px] bg-black px-[14px] md:px-[28px] py-[9px] md:py-[18px] text-white text-[16px] font-semibold"
          >
            Get started
          </button>
        </form>
        <p className="text-[16px] font-semibold text-[#1919A] text-center leading-[120%] mt-[12px] md:mt-[24px]">
          You’ll receive an email with an invite link to join.
        </p>
      </div>
    </>
  );
};

export default SignUp;
