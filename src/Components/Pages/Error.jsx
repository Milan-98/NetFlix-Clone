import React from "react";
import Error2 from "../../assets/error.webp";
const Error = () => {
  return (
    <div className="h-screen bg-white md:grid md:h-[100vh] md:place-items-stretch md:overflow-hidden ">
      <img src={Error2} alt="Error Page" />
    </div>
  );
};

export default Error;
