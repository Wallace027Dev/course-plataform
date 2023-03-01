import { Main } from "./styled";
import { Btn } from "../../styles/Btn";
import MainBanner from "../../images/MainPage.svg";
import LogoStaart from "../../images/LogoStaart.svg";
import { Link } from "react-router-dom";

export default function MainPage() {
  return (
    <Main className="center">
      <div>
        <img src={MainBanner} alt="Main Page Photo" />
      </div>
      <div className="center">
        <section>
          <h1>
            Dê o <span>{<img src={LogoStaart} alt="Logo Staart" />}</span> na{" "}
            <br />
            sua carreira em <br /> tecnologia
          </h1>
          <p>
            Nós capacitamos pessoas a construirem soluções através de
            tecnologia. Seguindo nossas jornadas você irá do zero até a
            construção de aplicações completas com tecnologias de mercado
          </p>
        </section>
        <div>
          <Link to="/sign-up">
            <Btn className="lnk subscribe">Inscrever</Btn>
          </Link>

          <Link to="/log-in">
            <Btn className="lnk">Logar</Btn>
          </Link>
        </div>
        <div className="fgt-pass">
          <p>Esqueceu a senha?</p>

          <Link to="/forgot-password">
            <Btn className="lnk">Resetar senha</Btn>
          </Link>
        </div>
      </div>
    </Main>
  );
}
