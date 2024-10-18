"use client"
import Link from "next/link";
import { Card } from "@/app/components/Card/Card";
import { useAppSelector } from "@/lib/hooks";
import { useParams } from "next/navigation";

export default function User() {

  const userId = useParams().user;
  const cardList = useAppSelector((state) => state.cards.cards);
  const user = cardList.find((item) => {
      return item.id == userId;
  });

    return (
      <section>
        <Card card={user} />
        <Link href={"/users"}>Go back</Link>
        <Link href={"/"}>Go home</Link>
      </section>
    )
}
