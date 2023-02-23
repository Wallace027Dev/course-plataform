import { Course } from "./styled";

export default function DataJ() {
  const data =
    "https://content.staart.com/app/_p/73a0e476-b7b1-464d-9d73-8faa71b44922/thumb/a10111eb-0c38-45bf-9d1a-10d70d8fe455.png";

  return (
    <Course>
      <nav className="navigator ">
        <div className="nav-bar ">
          <h1>Dados</h1>
          <img src={data} alt="Front end logo" />{" "}
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
