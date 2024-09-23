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
      className="fixed w-screen h-screen z-10 top-0 left-0 bg-[#00000099] flex justify-center items-center"
    >
      <div className="bg-[#242A2F] rounded-[30px] shadow-[0px_4px_64px_0px_#021426] p-4 sm:p-9 w-full max-w-[1000px] flex flex-col items-center max-h-screen overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default PopUp;
