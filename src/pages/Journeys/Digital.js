import { Course } from "./styled";

export default function Digital() {
  const digitalHab =
    "https://content.staart.com/app/_p/ea9d3a03-bfb4-4160-b59a-6cc30e15b3af/thumb/thumbnail (8).png";

  return (
    <Course>
      <nav className="navigator ">
        <div className="nav-bar ">
          <h1>Habilidades Digitais</h1>
          <img src={digitalHab} alt="Front end logo" />{" "}
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
