import { Greetings, Header, Main, RoadmapImage, Subtitle } from "./style";
import AnchorButton from "../../components/AnchorButton";
import logo from "../../images/LogoStaart.svg";
import roadmap from "../../assets/images/main-roadmap.png";

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
          <AnchorButton path="/welcome" variant="filled">
            Quero aprender
          </AnchorButton>
        </div>
      </Header>

      <Main>
        <Greetings>
          <small>Tecnologia para todos</small>
          <Subtitle>Dê um Staart na sua carreira em tecnologia</Subtitle>
          <p>
            Aqui na Staart nós capacitamos pessoas a construirem soluções
            através de tecnologia. Seguindo nossas jornadas você irá do zero até
            a construção de aplicações completas com tecnologias de mercado.
          </p>
          <AnchorButton variant="filled" path="#register">
            Quero saber como
          </AnchorButton>
        </Greetings>

        <RoadmapImage>
          {/* Imagem animada das rotas possíveis para aprender a programar */}
          <img src={roadmap} alt="Roteiro de jornada dos cursos" />
        </RoadmapImage>
      </Main>
    </>
  );
}
