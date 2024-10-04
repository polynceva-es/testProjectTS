import "./MainPage.css";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/testProjectTS/users")}>
        Go to users
      </button>
    </div>
  );
};
