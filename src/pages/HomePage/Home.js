import { HomeMain } from "./styled";
import CarouselJourneys from "../../components/CarouselJourneys/CarouselJourneys";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <HomeMain className="center">
      <div className="perfil">
        <Link className="lnk" to="/account-info">
          Mexer na conta
        </Link>
        <h1>🖐 Olá, Wallace</h1>
      </div>
      <main>
        <h2>Explore</h2>
        <p>O que você vai estudar hoje?</p>
        <input type="text" placeholder="Pesquise a jornada ou aula" />
        <h2>Escolha sua Jornada</h2>
        <div>
          {/* Aqui vai as jornadas */}
          <CarouselJourneys />
        </div>
      </main>
    </HomeMain>
  );
}
