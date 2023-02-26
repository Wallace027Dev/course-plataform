import { useNavigate } from "react-router-dom";
import LogIn from "../pages/Account/LogIn";

export default function localStorage() {
  const navigate = useNavigate();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    if (token || user) {
      setShouldRedirect(true);
    }
  }, []);

  if (shouldRedirect) {
    navigate("/verified");
    return null; // ou qualquer outro componente que você queira renderizar
  }

  return <LogIn />;
}
