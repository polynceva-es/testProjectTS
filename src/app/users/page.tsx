"use client";
import Link from "next/link";
import styles from "./users.module.css";
import { Card } from "../components/Card/Card";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { getCards } from "../../lib/features/card/cardSlice";

export default function Users() {
  const [pageNumber, setPageNumber] = useState(1);
  const cardList = useAppSelector((state) => state.cards.cards);
  const thatsAll = useAppSelector((state) => state.cards.thatsAll);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCards(pageNumber));
  }, []);

  useEffect(() => {
    dispatch(getCards(pageNumber));
  }, [pageNumber, dispatch]);
  const handleGiveMore = () => {
    setPageNumber(pageNumber + 1);
    dispatch(getCards(pageNumber));
  };

  return (
    <>
      <h1>This is Many Users</h1>
      <p>Users</p>
      <Link href={"/"}>Go Home page</Link>
      <section className={styles.section}>
        {/* add show liked card */}
        <ul className={styles.cardList}>
          {cardList.map((card) => (
            <li key={card.id}>
              <Card card={card} />
            </li>
          ))}
        </ul>
        {thatsAll ? <span>that is all card</span> : ""}
        <button onClick={handleGiveMore} disabled={thatsAll}>
          Give me more cards
        </button>
      </section>
    </>
  );
}
