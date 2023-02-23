import { Course } from "./styled";

export default function Back() {
  const back =
    "https://content.staart.com/app/_p/eca8e48a-57b3-46a1-a6ae-923aca77fc11/thumb/Back-End.png";

  return (
    <Course>
      <nav className="navigator ">
        <div className="nav-bar ">
          <h1>Backend</h1>
          <img src={back} alt="Front end logo" />{" "}
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
