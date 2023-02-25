import { useCallback, useEffect, useState } from "react";
import { Course } from "./styled";
import axios from "axios";

export default function Back() {
  const journey = "73a0e476-b7b1-464d-9d73-8faa71b44922";
  const logoJourney = `https://content.staart.com/app/_p/${journey}/thumb/a10111eb-0c38-45bf-9d1a-10d70d8fe455.png`;

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
          <h1>Dados</h1>
          <img src={logoJourney} alt="Data logo" />{" "}
        </div>
        <input type="text" placeholder="Pesquise sua aula" />
      </nav>
      <main>
        <h2>Escolha sua Jornada</h2>
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
