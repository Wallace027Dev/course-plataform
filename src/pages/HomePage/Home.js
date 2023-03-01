import { HomeMain } from "./styled";
import CarouselJourneys from "../../components/CarouselJourneys/CarouselJourneys";
import CarouselProfs from "../../components/CarouselProfs/CarouselProfs";
import bandeira from "../../images/bandeira.svg";
import menu from "../../images/menu.svg";
import money from "../../images/money.svg";
import linkImg from "../../images/linkImg.svg";
import wallace from "../../images/wallace.jpg";
import Footer from "../../components/Footer/Footer";

export default function Home(props) {
  return (
    <HomeMain id="head" className="center">
      <div>
        <h2>Explore</h2>
      </div>

      <section className="info-staart center">
        <div className="info-main">
          <h2>
            Staart é uma plataforma inovadora de <span>educação</span> em{" "}
            <span>tecnologia</span>
          </h2>
          <h3>
            Nossas jornadas são pensadas para você que está começando e ainda
            não sabe como navegar nesse mar de conteúdos disponíveis na
            internet.
          </h3>
        </div>
        <div className="info center">
          <div className="container">
            <div>
              <img src={bandeira} alt="Bandeira" />
              <p>Ingressar ou crescer no mercado de tecnologia</p>
            </div>
          </div>
          <div className="container">
            <div>
              <img src={menu} alt="Bandeira" />
              <p>Aprimorar processos e aumentar a produtividade</p>
            </div>
          </div>
          <div className="container">
            <div>
              <img src={money} alt="Bandeira" />
              <p>Preparar-se para os melhores empregos e remunerações</p>
            </div>
          </div>
        </div>
      </section>

      <section className="main">
        <div className="center">
          <h2>
            Escolha sua <span>jornada</span>
          </h2>
          <CarouselJourneys />
        </div>
        <div className="center margin-top">
          <h2>
            Os <span>maiores especialistas</span> da área selecionados para
            orienta <span>você</span>
          </h2>
          <CarouselProfs />
        </div>
        <div className="center">
          <div className="wrapper center">
            <img src={wallace} alt="Foto wallace" />
            <h2>Frontend Developer</h2>
            <h1>
              <span>Wallace</span> Vieira
            </h1>
            <div>
              <img src={linkImg} alt="Icone de link" />
              <a href="http://wallace027dev.vercel.app/">Conheça meu trampo</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </HomeMain>
  );
}
