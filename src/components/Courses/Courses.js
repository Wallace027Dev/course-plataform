import { useEffect, useState, useRef } from "react";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const coursesRef = useRef(null);

  useEffect(() => {
    fetch("https://frontend-project.staart.com/journeys")
      .then(async (response) => {
        const body = await response.json();
        setCourses(body);
        setCourses(console.log);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  if (!courses || !courses.length) return null;

  return (
    <div ref={coursesRef}>
      {courses.map((item) => {
        const { coursesID, medias, title, description } = item;

        return (
          <div key={coursesID}>
            <div>
              <img src={medias.thumb} alt="foto" />
            </div>
            <div>
              <span>{title}</span>
              <span>{description}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
