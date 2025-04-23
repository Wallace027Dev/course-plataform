import { useParams } from "react-router-dom";
import Journey from "./Journey";
import coursesMock from "../../mocks/courses.json";
import logos from "./journeyLogos";

export default function JourneyPage() {
  const { journeyId } = useParams();

  const journey = coursesMock.find((course) => course.id === journeyId);

  if (!journey) {
    return <h2>Jornada não encontrada.</h2>;
  }

  return (
    <Journey
      title={journey.title}
      logo={logos[journeyId] || "default-logo.png"}
      courses={[journey]}
    />
  );
}
