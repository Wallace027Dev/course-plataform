import { HomeMain } from "./styled";
import CarouselJourneys from "../../components/CarouselJourneys/CarouselJourneys";
import Courses from "../../components/Courses/Courses.js";

export default function Home() {
  return (
    <HomeMain>
      <h1>Olá, Wallace</h1>
      <main>
        <h2>Explore</h2>
        <p>O que você vai estudar hoje?</p>
        <input type="text" placeholder="Pesquise a jornada ou aula" />
        <h2>Escolha sua Jornada</h2>
        <div className="center">
          {/* Aqui vai as jornadas */}
          <CarouselJourneys />
        </div>
        <div>
          <Courses />
        </div>
      </main>
    </HomeMain>
  );
}
