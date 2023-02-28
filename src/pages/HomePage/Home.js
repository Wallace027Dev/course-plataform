import { HomeMain } from "./styled";
import CarouselJourneys from "../../components/CarouselJourneys/CarouselJourneys";
import CarouselProfs from "../../components/CarouselProfs/CarouselProfs";

export default function Home(props) {
  return (
    <HomeMain className="center">
      <main>
        <h2>Explore</h2>
        <p>O que você vai estudar hoje?</p>
        <input type="text" placeholder="Pesquise a jornada ou aula" />
        <h2>Escolha sua Jornada</h2>
        {/* Aqui vai as jornadas */}
        <div>
          <CarouselJourneys />
        </div>
        {/* Aqui vai as jornadas */}
        <div>
					<CarouselProfs />
				</div>
      </main>
    </HomeMain>
  );
}
