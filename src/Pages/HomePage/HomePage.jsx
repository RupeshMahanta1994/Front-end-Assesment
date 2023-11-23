import React from "react";
import Bell from "../../assets/Icons/Bell.svg";
import Eye from "../../assets/Icons/Eye.svg";
import cohorts1 from "../../assets/Cohorts 1.png";
import Logo from "../../assets/Icons/Vector.svg";
import { Notification, Testimonials, SignUp } from "../../Components";

const HomePage = () => {
  return (
    <>
      <div className="w-[100vw] lg:h-[100vh] flex flex-col lg:flex-row">
        <div className="w-[100vw] lg:w-[48vw] bgcolor flex flex-col items-center justify-between px-4 lg:pl-8 lg:pr-0 py-8 md: gap-2">
          <div className="flex flex-col md:flex-row gap-5 ">
            <div className="w-[100%] md:w-[55%]">
              <div className={` flex flex-col gap-2 md:text-left`}>
                <div className={`flex md:justify-start`}>
                  <img src={Bell} alt="" />
                </div>
                <h1 className="text-3xl text-[rgb(242,242,242)] tracking-wide font-medium ">
                  Get notified when a highly correlated whale makes a move
                </h1>
                <p className="text-sm text-gray-300 tracking-wider font-medium leading-[120%]">
                  Find out when a certain whale moves more than any preset
                  amount on-chain or when a dormant whale you care about becomes
                  active.
                </p>
              </div>
            </div>
            <div className="w=[100%] md:w-[45%]  flex items-center justify-center">
              <Notification />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-[100%] md-[45%]">
              <img
                className="md:w-[16rem] object-contain rounded-lg"
                src={cohorts1}
                alt=""
              />
            </div>
            <div className="w-[100%] md-[55%] md:mr-10">
              <div className={` flex flex-col gap-2 md:text-right`}>
                <div className={`flex md:justify-end`}>
                  <img src={Eye} alt="" />
                </div>
                <h1 className="text-3xl text-[rgb(242,242,242)] tracking-wide font-medium ">
                  Watch what the whales are doing
                </h1>
                <p className="text-sm text-gray-300 tracking-wider font-medium leading-[120%]">
                  All whales are not equal. Know exactly what the whales
                  impacting YOUR portfolio are doing.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full  text-right pb-5  md:pr-10  border-b-2 border-gray-300 font-[500] text-2xl text-[#F2F2F2] tracking-wider">
            Testimonial
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-end gap-3 md:gap-5">
            <div>
              <img className="w-[3rem] md:w-[20rem] " src={Logo} alt="" />
            </div>
            <Testimonials />
          </div>
        </div>
        <div className="w-[100vw] lg:w-[52vw] h-[100vh]   px-4 py-5 flex items-center justify-center md:z-10">
          <SignUp />
        </div>
      </div>
    </>
  );
};

export default HomePage;
