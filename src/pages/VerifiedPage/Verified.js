import { useNavigate } from "react-router-dom";
import { Verify } from "./styled";
import SucessLog from "../../images/SucessLog.svg";
import loader from "../../images/loader-primary.svg";

export default function Verified() {
  const navigate = useNavigate();

    function Counter() {
    navigate("/home");
  }
  setInterval(Counter, 2000); //2 segundos

  return (
    <Verify>
      <div>
        <img src={SucessLog} alt="Ícone de sucesso" />
        <h2>Sucess</h2>
        <p>Congrulations, you have completed your registration!</p>
        <img src={loader} alt="Loading" className="spin" />
      </div>
    </Verify>
  );
}
