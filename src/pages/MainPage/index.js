import { Header, Main } from "./style";
import logo from "../../images/LogoStaart.svg"

export default function MainPage() {
  return (
    <>
      <Header>
        <h1>
          <img src={logo} alt="Logo da plataforma" />
        </h1>

        <nav>
          <ul>
            <li><a href="#journeys">Jornada</a></li>
            <li><a href="#metodologies">Metodologia</a></li>
            <li><a href="#instructors">Instrutores</a></li>
          </ul>
        </nav>

        <div>
          <a href="/login">Já sou aluno</a> {/* Botão vazado */}
          <a href="/welcome">Quero aprender</a> {/* Botão preenchido */}
        </div>
      </Header>
      <Main>
        
      </Main>
    </>
  )
}