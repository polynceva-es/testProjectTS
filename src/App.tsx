import "./App.css";
import { useState } from "react";
import {Routes, Route} from "react-router-dom";
import { useAppDispatch } from "./store/store";
import { getCards } from "./store/cardSlice";
import { useEffect } from "react";
import { CardList } from "./components/CardList/CardList";
import { User } from "./components/User/User";

function App() {
  const dispatch = useAppDispatch();
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    dispatch(getCards(pageNumber));
  }, []);

  useEffect(() => {
    dispatch(getCards(pageNumber));
  }, [pageNumber, dispatch]);

  return (
  <Routes>
    <Route path="/users" element={<CardList pageNumber={pageNumber} setPageNumber={setPageNumber}/>}/>
    <Route path="/users/:id" element={<User/>} />
  </Routes>
)}

export default App;
