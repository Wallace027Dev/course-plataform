import notFound from "../../images/404.svg";
import { NtFound } from "./styled";

export default function NotFound() {
  return (
    <NtFound>
      <img src={notFound} alt="Error 404" />
      <h1>Rota não encontrada!</h1>
      <p>Desculpe, você deve procurar uma rota válida!</p>
    </NtFound>
  );
}
