import { Btn } from "../../components/Btn";
import { Main } from "./styled";
import MainPageLight from "../../images/MainPage-Light.svg";
import LogoStaart from "../../images/LogoStaart.svg";

export default function MainPage() {
  return (
    <Main>
      <img src={MainPageLight} alt="Main Page Photo" />
      <section>
        <h1>
          Dê <span>{<img src={LogoStaart} alt="" />}</span> na sua carreira em
          tecnologia
        </h1>
        <p>
          Nós capacitamos pessoas a construirem soluções através de tecnologia.
          Seguindo nossas jornadas você irá do zero até a construção de
          aplicações completas com tecnologias de mercado
        </p>
      </section>
      <div>
        <Btn>inscrever</Btn>
        <Btn>Logar</Btn>
      </div>
    </Main>
  );
}
