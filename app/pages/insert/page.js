import React from "react";
import Link from "next/link";
import Insert from "@/app/comp/Insert";

function page() {
  return (
    <>
      <h2>Insert</h2>
      <Insert />

      <Link href="/">HOME</Link>
      <Link href="./list">List 보기</Link>
    </>
  );
}

export default page;
