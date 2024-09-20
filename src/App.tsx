import "./App.css";
import {Routes, Route} from "react-router-dom";
import { useAppDispatch } from "./store/store";
import { getCards } from "./store/cardSlice";
import { useEffect } from "react";
import { CardList } from "./components/CardList/CardList";
import { User } from "./components/User/User";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCards());
  }, []);
  return (
  <Routes>
    <Route path="/users" element={<CardList/>}/>
    <Route path="/users/:id" element={<User/>} />
  </Routes>
)}

export default App;
