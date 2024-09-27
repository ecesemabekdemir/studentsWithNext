
import { ClassData } from "@/data";
import Link from "next/link";

export default function Class() {
  return (
    <>
      {ClassData.map((x) => (
        <Link href={`/classes/${x.id}`}> {x.className}</Link>
      ))}
    </>
  );
}
