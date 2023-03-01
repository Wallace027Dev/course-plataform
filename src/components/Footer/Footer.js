import staart from "../../images/LogoStaart.svg";
import up from "../../images/up.svg";
import { FooterStyle } from "./styled";

export default function Footer() {
  return (
    <FooterStyle>
      <div>
        <img src={staart} alt="Staart logo" />
        <h3>Dê Staart na sua evolução!</h3>
      </div>
      <div>
        <h2>© 2022 Staart, Inc.</h2>
      </div>
      <div>
        <a href="#head">
          <img src={up} alt="botão seta para cima" />
        </a>
      </div>
    </FooterStyle>
  );
}
