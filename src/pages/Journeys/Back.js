import { useCallback, useEffect, useState } from "react";
import { Course } from "./styled";
import axios from "axios";

export default function Back() {
  const journey = "eca8e48a-57b3-46a1-a6ae-923aca77fc11";
  const logoJourney = `https://content.staart.com/app/_p/${journey}/thumb/Back-End.png`;

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
    <Course>
      <nav className="navigator">
        <div className="nav-bar">
          <h1>Backend</h1>
          <img src={logoJourney} alt="Front end logo" />{" "}
        </div>
        <input type="text" placeholder="Pesquise sua aula" />
      </nav>
      <main>
        <h2>Escolha sua Jornada</h2>
        <div>
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
