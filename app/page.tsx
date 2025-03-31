import React from "react";
import ImagesLiberary from "./Components/ImagesLiberary/page";
import Link from "next/link";

const page = () => {
  return (
    <>
      Home
      <Link href="/Components/ImagesLiberary">ImagesLiberary</Link>
    </>
  );
};

export default page;
