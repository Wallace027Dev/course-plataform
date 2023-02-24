import { useCallback, useEffect, useState } from "react";
import { Course } from "./styled";
import axios from "axios";

export default function Back() {
  const back =
    "https://content.staart.com/app/_p/eca8e48a-57b3-46a1-a6ae-923aca77fc11/thumb/Back-End.png";

  const api = axios.create({
    baseURL: "https://frontend-project.staart.com/",
  });

  const [courses, setCourses] = useState([]);

  const fetchCourses = useCallback(async () => {
    const { data } = await api.get(
      `journeys/eca8e48a-57b3-46a1-a6ae-923aca77fc11/courses`
    );
    setCourses(data || []);
    console.log(data);
  }, []);

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <Course>
      <nav className="navigator">
        <div className="nav-bar">
          <h1>Backend</h1>
          <img src={back} alt="Front end logo" />{" "}
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
                  <img src={medias.thumb} alt="Imagem" />
                </div>
                <div className="wrapper-course-info center">
                  <h2>{title}</h2>
                  <h3>{instructor}</h3>
                  <p>{level}</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </Course>
  );
}
