import { Course } from "./styled";

export default function Journey({ title, logo, courses }) {
  return (
    <Course className="center">
      <nav className="navigator">
        <div className="nav-bar">
          <h1>{title}</h1>
          <img src={logo} alt={`${title} logo`} />
        </div>
      </nav>
      <main>
        <div className="grid center">
          {courses.map(({ id, title, medias, instructor, level }) => (
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
          ))}
        </div>
      </main>
    </Course>
  );
}
