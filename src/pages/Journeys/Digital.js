import { useCallback, useEffect, useState } from "react";
import { Course } from "./styled";
import axios from "axios";

export default function Back() {
  const journey = "ea9d3a03-bfb4-4160-b59a-6cc30e15b3af";
  const logoJourney = `https://content.staart.com/app/_p/${journey}/thumb/thumbnail (8).png`;

  const api = axios.create({
    baseURL: "https://frontend-project.staart.com/",
  });

  const [courses, setCourses] = useState([]);

  const fetchCourses = useCallback(async () => {
    const { data } = await api.get(`journeys/${journey}/courses`);
    setCourses(data || []);
  }, []);

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <Course className="center">
      <nav className="navigator">
        <div className="nav-bar">
          <h1>Digital Technologies</h1>
          <img src={logoJourney} alt="Digital Technologies logo" />{" "}
        </div>
      </nav>
      <main>
        <div className="center">
          {/* Cursos aqui */}
          {courses.map((item) => {
            const { id, title, medias, instructor, level } = item;
            return (
              <div className="wrapper-course center" key={id}>
                <div>
                  <img className="center" src={medias.thumb} alt="Imagem" />
                </div>
                <div className="wrapper-course-info center">
                  <h2>{title}</h2>
                  <h3>{instructor}</h3>
                  <p className="center">{level}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </Course>
  );
}
