import { useEffect, useState, useRef } from "react";
import { Carousels } from "./styled";
import { Link } from "react-router-dom";
import seta from "../../images/seta.svg";
import errorVideos from "../../images/errorVideos.svg";
import loader from "../../images/loader-primary.svg";
import coursesData from "../../mocks/courses.json";

export default function CarouselJourneys() {
  const carousel = useRef(null);
  const [loading, setLoading] = useState(true);
  const [journeys, setJourneys] = useState([]);

  useEffect(() => {
    try {
      const allJourneys = coursesData.flatMap((course) =>
        course.journeys.map((journey) => ({
          ...journey,
          courseId: course.id,
        }))
      );

      setJourneys(allJourneys);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao carregar jornadas:", error);
      setLoading(false);
    }
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
  }

  if (!journeys.length) {
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

  return (
    <Carousels>
      <div className="car" ref={carousel}>
        {journeys.map((journey) => {
          const { id, medias, title, description } = journey;
          return (
            <div className="item" key={id}>
              <Link to={`/home/${id}`}>
                <div className="image">
                  <img src={medias.thumb} alt={`Thumbnail de ${title}`} />
                </div>
                <div className="info">
                  <span className="title">{title}</span>
                  <span className="description">{description}</span>
                </div>
              </Link>
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
}
