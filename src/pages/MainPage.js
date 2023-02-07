import MainPageLight from "../images/MainPage-Light.svg";
import LogoStaart from "../images/LogoStaart.svg";

export default function MainPage() {
  return (
    <>
      <div>
        <img src={LogoStaart} alt="" />
      </div>
      <img src={MainPageLight} alt="Main Page Photo" />
      <h1>Dê Staart na sua carreira em tecnologia</h1>
      <p>
        Nós capacitamos pessoas a construirem soluções através de tecnologia.
        Seguindo nossas jornadas você irá do zero até a construção de aplicações
        completas com tecnologias de mercado
      </p>
			<div>
			<button>Inscrever</button>
			<button>Logar</button>
			</div>
    </>
  );
}
