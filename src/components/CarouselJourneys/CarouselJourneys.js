import { useEffect, useState, useRef } from "react";
import { Carousels } from "./styled";
import seta from "../../images/seta.svg";
import errorVideos from "../../images/errorVideos.svg";
import loader from "../../images/loader-primary.svg";
import { Link } from "react-router-dom";

export default function CarouselJourneys() {
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const carousel = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://frontend-project.staart.com/journeys")
      .then(async (response) => {
        const body = await response.json();

        setData(body);

        if (!response.ok) {
          hasError(true);
          return;
        }

        setLoading(false);
      })

      .catch(() => {
        setHasError(true);
      });
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (loading) {
    return (
      <img
        style={{ marginTop: 100 }}
        src={loader}
        alt="Loading"
        className="spin"
      />
    );
  } else if (!loading) {
    return (
      <Carousels>
        <div className="car" ref={carousel}>
          {data.map((item) => {
            const { coursesID, medias, title, description } = item;
            return (
              <div className="item" key={coursesID}>
                <div className="image">
                  <img src={medias.thumb} alt="foto" />
                </div>
                <div className="info">
                  <span className="title">{title}</span>
                  <span className="group">{description}</span>
                </div>
              </div>
            );
          })}
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
  } else if (hasError) {
    return (
      <div>
        <img src={errorVideos} alt="Imagem de erro" />
        <h2 style={{ marginBottom: "16px" }}>Sem jornada!</h2>
        <p>
          Não foi encontrada nenhuma
          <br />
          jornada do momento
        </p>
      </div>
    );
  }
}
