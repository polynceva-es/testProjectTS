'use client'
import Link from "next/link";
import styles from "./users.module.css";
import { Card } from "../components/Card/Card";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { getCards } from "../../lib/features/card/cardSlice";
import { AppStore } from "@/lib/store";
import { cardList } from "../const";

type Props = {
  pageNumber: number
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  store: AppStore
};

export default function Users(props: Props) {
  const {pageNumber, setPageNumber} = props;
  // The `state` arg is correctly typed as `RootState` already
  // const cardsList = useAppSelector((state) => state.cards.cards);
  const thatsAll = useAppSelector((state) => state.cards.thatsAll);
  const dispatch = useAppDispatch();
  const handleGiveMore = () => {
    setPageNumber(pageNumber + 1);
    dispatch(getCards(pageNumber))
  }

  return (
    <>
      <h1>This is Many Users</h1>
      <p>Users</p>
      <Link href={"/"}>Go Home page</Link>
      <section className="cardList__section">

    {/* add show liked card */}
    <ul className="cardList">
      {cardList.map((card) => (
        <li key={card.id}>
          <Card card={card}/>
          {/* <Link href={`/users/${card.id}`}>{card.first_name}</Link> */}
        </li>
      ))}
    </ul>
    {thatsAll ? <span>that is all card</span> : ''}
    <button onClick={handleGiveMore} disabled={thatsAll}>Give me more cards</button>
    </section>
    </>
  );
}
