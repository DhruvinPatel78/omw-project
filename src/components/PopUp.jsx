import React from "react";

const PopUp = ({ open, close, children }) => {
  const closeHandler = (e) => {
    if (e.target.id === "ModelContainer") {
      close();
    }
  };

  if (open !== true) return null;

  return (
    <div
      id="ModelContainer"
      onClick={closeHandler}
      className="fixed z-10 inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm"
    >
      <div className="bg-[#242A2F] w-full max-w-[1000px] border-e-emerald-600 rounded-[30px] shadow-[0px_4px_64px_0px_#021426] p-4 sm:p-6 flex flex-col items-center gap-2">
        {children}
      </div>
    </div>
  );
};

export default PopUp;
