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
        <div >
          {courses.map(({ id, title, medias, instructor, level, lessons }) => (
            <div className="center" key={id}>
              <div>
                <img
                  className="center"
                  src={medias.thumb}
                  alt={`Imagem de ${title}`}
                />
              </div>
              <div className="center">
                <h2>{title}</h2>
                <h3>{instructor}</h3>
                <p className="center">{level}</p>

                {lessons && lessons.length > 0 && (
                  <ul  className="grid center">
                    {lessons.map((lesson, index) => (
                      <li className="wrapper-course" key={index}>{lesson.title}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </Course>
  );
}
