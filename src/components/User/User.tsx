import { Card } from "../Card/Card";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/store";

export const User = () => {
  const userId = useParams();
  const cardsList = useAppSelector((state) => state.cards.cards);
  const user = cardsList.find((item) => {
    return item.id == userId.id;
  });
  if(user) {return <Card card={user} />;} else {return <div>Oops...!</div>}
};
