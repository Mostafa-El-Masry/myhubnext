import React from "react";
import Link from "next/link";
import Dashboard from '@/src/app/dashboard/page';
import VideoLiberary from "./VideoLiberary/page";

const page = () => {
  return (
    <>
      Home
      <Dashboard />
      <Link href="/ImagesLiberary">ImagesLiberary</Link>
      <VideoLiberary />
    </>
  );
};

export default page;
