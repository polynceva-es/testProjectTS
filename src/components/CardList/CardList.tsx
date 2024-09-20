import "./CardList.css";
import { useAppSelector } from "../../store/store";
import { Card } from "../Card/Card";


export const CardList = () => {
  // The `state` arg is correctly typed as `RootState` already
  const cardsList = useAppSelector((state) => state.cards.cards);
  return (
    <ul className="cardList">
      {cardsList.map((card) => (
        <li key={card.id}>
          <Card card={card}/>
        </li>
      ))}
    </ul>
  );
};
