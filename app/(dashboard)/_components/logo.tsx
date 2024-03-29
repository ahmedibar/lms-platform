import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image src="/assets/images/logo.svg" alt="logo" width={130} height={130} />
  );
};

export default Logo;
