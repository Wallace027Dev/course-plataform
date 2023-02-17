import { Main } from "./styled";
import { Btn } from "../../styles/Btn";
import MainPageLight from "../../images/MainPage-Light.svg";
import LogoStaart from "../../images/LogoStaart.svg";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <Main className="center">
      <img src={MainPageLight} alt="Main Page Photo" />
      <section>
        <h1>
          Dê o <span>{<img src={LogoStaart} alt="Logo Staart" />}</span> na{" "}
          <br />
          sua carreira em <br /> tecnologia
        </h1>
        <p>
          Nós capacitamos pessoas a construirem soluções através de tecnologia.
          Seguindo nossas jornadas você irá do zero até a construção de
          aplicações completas com tecnologias de mercado
        </p>
      </section>
      <div>
        <Link to="/sign-up">
          <Btn className="lnk">Inscrever</Btn>
        </Link>

        <Link to="/log-in">
          <Btn className="lnk">Logar</Btn>
        </Link>
      </div>
      <div className="fgt-pass">
        <p>Esqueceu a senha?</p>

        <Link to="/">
          <Btn className="lnk">Resetar senha</Btn>
        </Link>
      </div>
    </Main>
  );
}
