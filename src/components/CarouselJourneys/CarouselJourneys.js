import { useEffect, useState, useRef } from "react";
import { Carousels } from "./styled";
import seta from "../../images/seta.svg";

export default function CarouselJourneys() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch("https://frontend-project.staart.com/journeys")
      .then(async (response) => {
        const body = await response.json();
        setData(body);
      })

      .catch((error) => {
        console.log(error.message);
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

  if (!data || !data.length) return null;

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
}
