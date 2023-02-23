import { CourseStyle } from "./styled";
import pause from "../../images/pause.svg";
import play from "../../images/play.svg";

export default function Course() {
  return (
    <CourseStyle>
      {/* Vídeo aqui */}
      <div>
        <h1>Vídeo Aula</h1>
      </div>
      <main className="wrapper">
        <div className="course-info">
          <div>
            <h2>Nome da Aula</h2>
            <p>Tempo em horas</p>
          </div>
          <div>
            <h3>Descrição</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium
            </p>
          </div>
        </div>
        <div className="other-courses">
          <div>
            <h3>01</h3>
            <h4>Welcome to the course</h4>
            <img src={play} alt="Botão" />
          </div>
          <div>
            <h3>02</h3>
            <h4>Second Course</h4>
            <img src={pause} alt="Botão" />
          </div>
          <div>
            <h3>03</h3>
            <h4>third Course</h4>
            <img src={pause} alt="Botão" />
          </div>
        </div>
      </main>
    </CourseStyle>
  );
}
