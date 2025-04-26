import React from "react";
import Link from "next/link";
import Dashboard from '@/src/app/dashboard/page';

const page = () => {
  return (
    <>
      Home
      <Dashboard />
      <Link href="/ImagesLiberary">ImagesLiberary</Link>
    </>
  );
};

export default page;
