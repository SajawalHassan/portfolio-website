import React from "react";

function ComputersCmdBox() {
  return (
    <div className="w-[70%] xl:w-[80%] 2xl:w-[70%] rounded-[10px] border-[2px] sm:border-[4px] border-[#282C29] bg-[#353738] py-[5px] pl-[13px] md:py-[2px] lg:py-[5px] flex items-center">
      <p className="text-[22px] md:text-[20px] xl:text-[26px] 2xl:text-[34px] space-x-2 text-white">
        <span className="font-francois text-accent">~/Computers</span>
        <span>$</span>
        <span className="font-francois">ls...</span>
      </p>
    </div>
  );
}

export default ComputersCmdBox;
