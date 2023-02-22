import { HomeMain } from "./styled";
import CarouselJourneys from "../../components/CarouselJourneys/CarouselJourneys";
import { Link } from "react-router-dom";

export default function Home() {
  const front =
    "https://content.staart.com/app/_p/e774057d-f0e8-4d5f-8076-33522fffb96d/thumb/Front-End.png";
  const back =
    "https://content.staart.com/app/_p/eca8e48a-57b3-46a1-a6ae-923aca77fc11/thumb/Back-End.png";
  const dados =
    "https://content.staart.com/app/_p/73a0e476-b7b1-464d-9d73-8faa71b44922/thumb/a10111eb-0c38-45bf-9d1a-10d70d8fe455.png";
  const digHab =
    "https://content.staart.com/app/_p/ea9d3a03-bfb4-4160-b59a-6cc30e15b3af/thumb/thumbnail (8).png";

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
        <div className="journeys-link">
          <Link to="/front">
            <img src={front} alt="Jornada" />
          </Link>
          <Link to="/back">
            <img src={back} alt="Jornada" />
          </Link>
          <Link to="/data">
            <img src={dados} alt="Jornada" />
          </Link>
          <Link to="/digital">
            <img src={digHab} alt="Jornada" />
          </Link>
        </div>
      </main>
    </HomeMain>
  );
}
