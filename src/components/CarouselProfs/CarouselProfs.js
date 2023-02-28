import { useRef } from "react";
import { Carousels } from "./styled";
import seta from "../../images/seta.svg";
import ContainerProfs from "./ContainerProfs";
import ThiagoBordini from "../../images/ThiagoBordini.webp";
import axur from "../../images/axur.webp";
import GabrielVanessa from "../../images/GabrielVanessa.webp";
import codigoFonte from "../../images/codigo-fonte.webp";
import ErikWendel from "../../images/ErikWendel.webp";
import ewIt from "../../images/ew-it.webp";
import LeticiaTiveron from "../../images/LeticiaTiveron.webp";
import meta from "../../images/meta.webp";
import DanielFurtado from "../../images/DanielFurtado.webp";
import uxNow from "../../images/ux-now.webp";

export default function CarouselProfs(props) {
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  return (
    <Carousels>
      <div className="car" ref={carousel}>
        <ContainerProfs
          profPhoto={ThiagoBordini}
          profName={"Thiago Bordini"}
          logo={axur}
        />
        <ContainerProfs
          profPhoto={GabrielVanessa}
          profName={"Gabriel e Vanessa"}
          logo={codigoFonte}
        />
        <ContainerProfs
          profPhoto={ErikWendel}
          profName={"Erik Wendel"}
          logo={ewIt}
        />
        <ContainerProfs
          profPhoto={DanielFurtado}
          profName={"Daniel Furtado"}
          logo={uxNow}
        />
        <ContainerProfs
          profPhoto={LeticiaTiveron}
          profName={"Letícia Tiveron"}
          logo={meta}
        />
      </div>
      <div className="btns">
        <button onClick={handleLeftClick}>
          <img src={seta} alt="Seta para esquerda" />
        </button>
        <button onClick={handleRightClick}>
          <img src={seta} alt="Seta para direita" />
        </button>
      </div>
    </Carousels>
  );
}
