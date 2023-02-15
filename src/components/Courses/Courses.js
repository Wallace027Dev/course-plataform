import { useEffect, useState, useRef } from "react";

export default function CarouselJourneys() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch(
      "https://frontend-project.staart.com/courses/23856860-f5b9-4b71-a92f-546902b8348c/lessons/d4d72976-965d-4670-87f4-4bbf56ba7725"
    )
      .then(async (response) => {
        const body = await response.json();
        setData(body);
      })

      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  if (!data || !data.length) return null;

  return (
    <div>
      <div className="car" ref={carousel}>
        {data.map((item) => {
          const { modules, thumb } = item;

          return (
            <div className="item" key={modules.lessonsID}>
              <div className="image">
                <img src={thumb} alt="foto" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
