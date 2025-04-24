import { Header, Main } from "./style";
import logo from "../../images/LogoStaart.svg";
import AnchorButton from "../../components/AnchorButton";

export default function MainPage() {
  return (
    <>
      <Header>
        <h1>
          <img src={logo} alt="Logo da plataforma" />
        </h1>

        <nav>
          <ul>
            <li>
              <AnchorButton path="#journeys">Jornada</AnchorButton>
            </li>
            <li>
              <AnchorButton path="#metodologies">Metodologia</AnchorButton>
            </li>
            <li>
              <AnchorButton path="#instructors">Instrutores</AnchorButton>
            </li>
          </ul>
        </nav>

        <div className="page-buttons">
          <AnchorButton path="/login">Já sou aluno</AnchorButton>
          {/* Botão vazado */}
          <AnchorButton path="/welcome" variant="filled">
            Quero aprender
          </AnchorButton>
          {/* Botão preenchido */}
        </div>
      </Header>
      <Main></Main>
    </>
  );
}
