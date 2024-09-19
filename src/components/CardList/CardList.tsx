import "./CardList.css";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { getCards } from "../../store/cardSlice";
import { useEffect } from "react";

export const CardList = () => {
  // The `state` arg is correctly typed as `RootState` already
  const cardsList = useAppSelector((state) => state.cards.cards);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCards());
  }, []);
  return (
    <ul className="cardList">
      {cardsList.map((card) => (
        <li key={card.id} className="cardList__item">
          <img src={card.avatar} alt="photo" />
          <h1>{card.first_name}</h1>
          <p>{card.last_name}</p>
          <p>{card.email}</p>
          <button onClick={()=> console.log(`is liked ${card.first_name}`)}/>
        </li>
      ))}
    </ul>
  );
};
