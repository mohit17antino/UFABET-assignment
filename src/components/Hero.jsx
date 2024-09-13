import React from "react";
import MainBody from "./MainBody";

const Hero = () => {

  return (
    <div className="main-body">

        {/* left */}
     <div className="body-left"></div>

     {/* center */}
     <MainBody/>

{/* right */}
      <div className="body-right"></div>
    </div>
  );
};

export default Hero;
