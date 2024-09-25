import { Card } from "../../Card/Card";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../store/store";

export const User = () => {
  const userId = useParams();
  const navigate = useNavigate();
  const cardsList = useAppSelector((state) => state.cards.cards);
  const user = cardsList.find((item) => {
    return item.id == userId.id;
  });
  if(user) {
    return (
      <section>
        <Card card={user} />
        <button  onClick={()=> navigate('/testProjectTS/users')}>Go back</button>
      </section>
    );
  } else {return <div>Oops...!</div>}
};
