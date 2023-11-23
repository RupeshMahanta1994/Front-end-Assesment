import React from "react";
import Bell from "../../assets/Icons/Bell.svg";
import Eye from "../../assets/Icons/Eye.svg";
import cohorts1 from "../../assets/Cohorts 1.png";
import Logo from "../../assets/Icons/Vector.svg";
import { TextBox, Notification, Testimonials, SignUp } from "../../Components";

const HomePage = () => {
  return (
    <>
      <div className="w-[100vw] lg:h-[100vh] flex flex-col lg:flex-row">
        <div className="w-[100vw] lg:w-[48vw] bgcolor flex flex-col items-center justify-between px-4 lg:pl-8 lg:pr-0 py-8 md: gap-2">
          <div className="flex flex-col md:flex-row gap-5 ">
            <div className="w-[100%] md:w-[55%]">
              <TextBox
                image={Bell}
                imagePlace={`start`}
                title={`Get notified when a highly correlated whale makes a move`}
                desc={`Find out when a certain whale moves more than any preset amount
              on-chain or when a dormant whale you care about becomes active.`}
              />
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
              <TextBox
                image={Eye}
                imagePlace={`end`}
                textPlace={`right`}
                title={`Watch what the whales are doing`}
                desc={`  All whales are not equal. Know exactly what the whales
                    impacting YOUR portfolio are doing.`}
              />
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
