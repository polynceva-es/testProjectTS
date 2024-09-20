import "./CardList.css";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/store";
import { Card } from "../Card/Card";


export const CardList = () => {
  // The `state` arg is correctly typed as `RootState` already
  const cardsList = useAppSelector((state) => state.cards.cards);
  const navigate = useNavigate();


  return (
    <ul className="cardList">
      {cardsList.map((card) => (
        <li key={card.id} onClick={() => navigate(`/users/${card.id}`)}>
          <Card card={card}/>
        </li>
      ))}
    </ul>
  );
};
