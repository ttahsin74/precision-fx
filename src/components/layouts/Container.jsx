import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={`xl:max-w-[1180px] 2xl:max-w-[1320px] px-10 xl:px-0 m-auto ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
