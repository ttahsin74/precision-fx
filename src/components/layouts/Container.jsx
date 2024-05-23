import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={`lg:max-w-[900px] xl:max-w-[1180px] 2xl:max-w-[1320px] md:px-10 xl:px-0 px-4 sm:px-7 m-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
