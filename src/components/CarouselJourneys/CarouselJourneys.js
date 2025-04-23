import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import errorVideos from "../../images/errorVideos.svg";
import loader from "../../images/loader-primary.svg";
import coursesData from "../../mocks/courses.json";
import { Carousels } from "./styled";

export default function CarouselJourneys() {
  const [loading, setLoading] = useState(true);
  const [journeys, setJourneys] = useState([]);

  useEffect(() => {
    try {
      const allJourneys = coursesData.flatMap((course) =>
        course.journeys.map((journey) => ({
          ...journey,
          courseId: course.id
        }))
      );

      setJourneys(allJourneys);
      setLoading(false);
    } catch (error) {
      console.error("Erro ao carregar jornadas:", error);
      setLoading(false);
    }
  }, []);

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
      <Splide
        options={{
          type: "loop",
          perPage: 3,
          gap: "1rem",
          pagination: false,
          arrows: true,
          autoplay: true,
          interval: 3000,
          pauseOnHover: true,
          resetProgress: false,
          breakpoints: {
            1024: { perPage: 2 },
            768: { perPage: 1 }
          }
        }}
        aria-label="Jornadas"
      >
        {journeys.map((journey) => {
          const { id, medias, title } = journey;
          return (
            <SplideSlide key={id}>
              <Link to={`/${encodeURIComponent(title)}/${id}`}>
                <div className="image">
                  <img src={medias.thumb} alt={`Thumbnail de ${title}`} />
                </div>
                <div className="info">
                  <span className="title">{title}</span>
                </div>
              </Link>
            </SplideSlide>
          );
        })}
      </Splide>
    </Carousels>
  );
}
