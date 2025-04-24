import { Container } from "./style";

export default function AnchorButton({ children, path }) {
  return <Container href={path}>{children}</Container>;
}
