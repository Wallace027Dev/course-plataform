import { useEffect, useState, useRef } from "react";
import { Carousels } from "./styled";

export default function Carousel() {
  const [data, setData] = useState([]);
	const carousel = useRef(null)

  useEffect(() => {
    fetch("https://frontend-project.staart.com/resource/?resourceName=journeys")
      .then((response) => response.json())
      .then(setData);
  }, []);

	const handleRight = (e) =>{
		e.preventDefault()
		carousel.current.scrollLeft += carousel.current.offsetWidth
		
	}

	const handleLeft = (e) =>{
		e.preventDefault()
		carousel.current.scrollLeft -= carousel.current.offsetWidth
	}

  if (!data || !data.length) return null;

  return (
    <>
      <Carousels useRef={carousel}>
        {data.map((item) => {
          const { pathID, thumb, title, group } = item;

          return (
            <div className="item" key={pathID}>
              <div className="image">
                <img src={thumb} alt="foto" />
              </div>
              <div className="info">
                <span className="name">{title}</span>
                <span className="price">{group}</span>
              </div>
            </div>
          );
        })}
      <div className="btns">
        <button onClick={handleRight}>Direita</button>
        <button onClick={handleLeft}>Esquerda</button>
      </div>
      </Carousels>
    </>
  );
}
