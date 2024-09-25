import "./CardList.css";
import { useAppSelector, useAppDispatch } from "../../../store/store";
import { getCards } from "../../../store/cardSlice";
import { Card } from "../../Card/Card";
import { useNavigate } from "react-router-dom";


type Props = {
  pageNumber: number
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
};

export const CardList = (props: Props) => {
  const {pageNumber, setPageNumber} = props;
  // The `state` arg is correctly typed as `RootState` already
  const cardsList = useAppSelector((state) => state.cards.cards);
  const thatsAll = useAppSelector((state) => state.cards.thatsAll);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();



  const handleGiveMore = () => {
    setPageNumber(pageNumber + 1);
    dispatch(getCards(pageNumber))
  }
  return (
    <section className="cardList__section">
      <button onClick={()=> navigate('/testProjectTS/')}>Go to main page</button>
    {/* add show liked card */}
    <ul className="cardList">
      {cardsList.map((card) => (
        <li key={card.id}>
          <Card card={card}/>
        </li>
      ))}
    </ul>
    {thatsAll ? <span>that is all card</span> : ''}
    <button onClick={handleGiveMore} disabled={thatsAll}>Give me more cards</button>
    </section>
  );
};
