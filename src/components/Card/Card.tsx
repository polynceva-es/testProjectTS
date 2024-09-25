import "./Card.css";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { CardType } from "../../store/cardSlice";
import { handleLike, handleDelete } from "../../store/cardSlice";

//export const Card: FC<{card: CardType}> = ({card}) => {
export const Card = ({ card }: { card: CardType }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const cardsList = useAppSelector((state) => state.cards.cards);
  const user = cardsList.find((item) => item.id == card.id);
  const isLiked = user ? user.isLiked : false;
  const isDelete = user ? user.isDelete : false;

  const cardClassName = `card ${isDelete ? "card_hidden" : ""}`;
  const buttonLikeClassName = `card__button-like ${
    isLiked ? "card__button-like_liked" : ""
  }`;
  return (
    <article className={cardClassName}>
      <img
        src={card.avatar}
        alt="photo"
        className="card__avatar"
        onClick={() => navigate(`/testProjectTS/users/${card.id}`)}
      />
      <h1>{card.first_name}</h1>
      <p>{card.last_name}</p>
      <p>{card.email}</p>
      <div className="card__btn-conteiner">
        <button
          className={buttonLikeClassName}
          onClick={() => dispatch(handleLike(card.id))}
        />
        <button
          className="card__button-delete"
          onClick={() => dispatch(handleDelete(card.id))}
        />
      </div>
    </article>
  );
};
