import React from "react";

function ComputersCmdBox() {
  return (
    <div className="w-[90%] rounded-full border-[6px] border-[#282C29] bg-[#353738] py-[9.5px] pl-[13px] flex items-center">
      <p className="text-[28px] space-x-3 text-white">
        <span className="font-francois text-accent">~/Computers</span>
        <span>$</span>
        <span className="font-francois">ls...</span>
      </p>
    </div>
  );
}

export default ComputersCmdBox;
