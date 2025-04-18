import React from "react";
import Link from "next/link";
import Dashboard from '@/app/dashboard/page';

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
