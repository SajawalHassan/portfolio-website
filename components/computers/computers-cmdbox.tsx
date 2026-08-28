import React from "react";

function ComputersCmdBox() {
  return (
    <div className="w-[70%] rounded-[10px] border-[2px] sm:border-[4px] border-[#282C29] bg-[#353738] py-[5px] pl-[13px] flex items-center">
      <p className="text-[22px] space-x-2 text-white">
        <span className="font-francois text-accent">~/Computers</span>
        <span>$</span>
        <span className="font-francois">ls...</span>
      </p>
    </div>
  );
}

export default ComputersCmdBox;
