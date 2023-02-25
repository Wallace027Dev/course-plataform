import { useNavigate } from "react-router-dom";
import { Verify } from "./styled";
import SucessLog from "../../images/SucessLog.svg";
import loader from "../../images/loader-primary.svg";
import { useEffect, useState } from "react";

export default function Verified() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    function Counter() {
      setLoading(false);
      navigate("/home");
    }
    if (loading) {
      setTimeout(Counter, 2000);
    } //2 segundos
  }, []);

  return (
    <Verify className="center">
      <div>
        <img src={SucessLog} alt="Ícone de sucesso" />
        <h2>Sucess</h2>
        <p>Congrulations, you have completed your registration!</p>
        <img src={loader} alt="Loading" className="spin" />
      </div>
    </Verify>
  );
}
