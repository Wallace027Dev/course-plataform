import { Course } from "./styled";

export default function Front() {
  const front =
    "https://content.staart.com/app/_p/e774057d-f0e8-4d5f-8076-33522fffb96d/thumb/Front-End.png";

  return (
    <Course>
      <nav className="navigator ">
        <div className="nav-bar ">
          <h1>Course</h1>
          <img src={front} alt="Front end logo" />{" "}
        </div>
        <input type="text" placeholder="Pesquise sua aula" />
      </nav>
      <main>
        <h2>Escolha sua Jornada</h2>
        <div>
          {/* Cursos aqui */}
          <div className="wrapper-course center">
            <div>
              <img src="#" alt="Imagem" />
            </div>
            <div className="wrapper-course-info center">
              <h2>Aula</h2>
              <h3>Descrição aula</h3>
              <p>1 horas</p>
            </div>
          </div>
        </div>
      </main>
    </Course>
  );
}
