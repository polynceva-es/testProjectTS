import "./App.css";
import { useState } from "react";
import {Routes, Route} from "react-router-dom";
import { useAppDispatch } from "./store/store";
import { getCards } from "./store/cardSlice";
import { useEffect } from "react";
import { MainPage } from "./components/pages/MainPage/MainPage";
import { CardList } from "./components/pages/CardList/CardList";
import { User } from "./components/pages/User/User";

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
    <Route path="/testProjectTS/" element={<MainPage/>} />
    <Route path="/testProjectTS/users" element={<CardList pageNumber={pageNumber} setPageNumber={setPageNumber}/>}/>
    <Route path="/testProjectTS/users/:id" element={<User/>} />
  </Routes>
)}

export default App;
