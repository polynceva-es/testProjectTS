"use client";
import styles from "./card.module.css";
import Link from "next/link";
// import Image from "next/image";
import { useAppSelector, useAppDispatch } from "../../../lib/hooks";
import { CardType } from "../../../lib/features/card/cardSlice";
import { handleLike, handleDelete } from "../../../lib/features/card/cardSlice";

//export const Card: FC<{card: CardType}> = ({card}) => {
export const Card = ({ card }: { card: CardType }) => {
  const dispatch = useAppDispatch();
  const cardsList = useAppSelector((state) => state.cards.cards);
  const user = cardsList.find((item) => item.id == card.id);
  const isLiked = user ? user.isLiked : false;
  const isDelete = user ? user.isDelete : false;

  const cardClassName = styles.card + " " + (isDelete ? styles.hidden : "");
  const buttonLikeClassName =
    styles.like + " " + styles.button + " " + (isLiked ? styles.liked : "");
  return (
    <article
      className={cardClassName}
      style={{ border: "1px solid black", width: "200px" }}
    >
      <Link href={`/users/${card.id}`}>
        <img
          className={styles.avatar}
          src={card.avatar}
          width={50}
          height={50}
          alt="photo"
        />

        <h1>{card.first_name}</h1>
        <p>{card.last_name}</p>
        <p>{card.email}</p>
      </Link>
      <div className={styles.conteiner}>
        <button
          className={buttonLikeClassName}
          onClick={() => dispatch(handleLike(card.id))}
        />
        <button
          className={styles.delete + " " + styles.button}
          onClick={() => dispatch(handleDelete(card.id))}
        />
      </div>
    </article>
  );
};
