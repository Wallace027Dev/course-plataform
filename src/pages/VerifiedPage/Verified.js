import { Link } from "react-router-dom";
import { Verify } from "./styled";
import SucessLog from "../../images/SucessLog.svg";
import { Btn } from "../../components/Btn";

export default function Verified() {
  return (
    <Verify>
      <div>
        <img src={SucessLog} alt="Ícone de sucesso" />
        <h2>Sucess</h2>
        <p>Congrulations, you have completed your registration!</p>
        <Link to="/home">
          <Btn className="lnk">Pronto</Btn>
        </Link>
      </div>
    </Verify>
  );
}
