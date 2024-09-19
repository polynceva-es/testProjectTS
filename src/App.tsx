import "./App.css";
import { useAppSelector, useAppDispatch } from "./store/store";
import { getCards } from "./store/cardSlice";
import { useEffect } from "react";

function App() {

  // The `state` arg is correctly typed as `RootState` already
  const cardsList = useAppSelector((state) => state.cards.cards)
  const dispatch = useAppDispatch()

useEffect(()=> {
  dispatch(getCards())
}, [])
  
return <ul>{
  cardsList.map((card,i) => <li key={i}>
      <h1>{card.name}</h1>
      <p>{card.countryCode}</p>
      <p>{card.counties}</p>
    </li>
   )
  }</ul>;
}

export default App;
