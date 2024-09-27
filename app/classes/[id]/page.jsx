"use client";
import { ClassData } from "@/data";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ClassDetail({ params }) {
  const { id } = params;
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(ClassData.filter((x) => x.id === id).students);
  }, [id]);

  console.log(ClassData);
  return (
    <>
      {data.map((x) => (
        <Link href={`/classes/${id}/students/${x.id}`}>{x.fullName}</Link>
      ))}
    </>
  );
}
