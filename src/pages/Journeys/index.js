import { useParams } from "react-router-dom";
import Journey from "./Journey";
import coursesMock from "../../mocks/courses.json";
import logos from "./journeyLogos";

export default function JourneyPage() {
  const { id } = useParams();

  // Busca a jornada correta dentro de todos os cursos
  const journey = coursesMock.flatMap(course =>
    course.journeys.map(journey => ({
      ...journey,
      courseTitle: course.title, // opcional, se quiser mostrar o curso na jornada
      courseId: course.id
    }))
  ).find(journey => journey.id === id);

  if (!journey) {
    return <h2>Jornada não encontrada.</h2>;
  }
  console.log(logos)
  return (
    <Journey
      title={journey.title}
      logo={logos[id] || "default-logo.png"}
      courses={[journey]}
    />
  );
}
