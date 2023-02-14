import { useEffect, useState } from "react";
import { Carousels } from "./styled";

export default function Carousel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://frontend-project.staart.com/journeys")
      .then(async (response) => {
        const body = await response.json();
        console.log(body);
        setData(body);
      })

      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  if (!data || !data.length) return null;

  return (
    <Carousels>
      {data.map((item) => {
        const { coursesID, medias, title, group } = item;

        return (
          <div className="item" key={coursesID}>
            <div className="image">
              <img src={medias.thumb} alt="foto" />
            </div>
            <div className="info">
              <span className="name">{title}</span>
              <span className="price">{group}</span>
            </div>
          </div>
        );
      })}
    </Carousels>
  );
}
