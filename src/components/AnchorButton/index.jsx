import { Container } from "./style";

export default function AnchorButton({ children, path, variant }) {
  return (
    <Container href={path} variant={variant}>
      {children}
    </Container>
  );
}
