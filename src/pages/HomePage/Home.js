import { HomeMain } from "./styled";
import vitor from "../../images/profs/vitor.jpg";

export default function Home() {
  return (
    <HomeMain>
      <h1>Olá, Wallace</h1>
      <main>
        <h2>Explore</h2>
        <p>O que você vai estudar hoje?</p>
        <input type="text" placeholder="Pesquise a jornada ou aula" />
        <div className="center">
          {/* Aqui vai um preview dos professores */}
        </div>
        <h2>Escolha sua Jornada</h2>
        <section className="center">
          {/* Aqui vai as jornadas */}
          <div>
            <img className="journey-img" src={vitor} alt="Professor preview" />
            <h3>Jornada de React</h3>
          </div>
          <div>
            <img className="journey-img" src={vitor} alt="Professor preview" />
            <h3>Jornada de React</h3>
          </div>
          <div>
            <img className="journey-img" src={vitor} alt="Professor preview" />
            <h3>Jornada de React</h3>
          </div>
          <div>
            <img className="journey-img" src={vitor} alt="Professor preview" />
            <h3>Jornada de React</h3>
          </div>
        </section>
      </main>
    </HomeMain>
  );
}
