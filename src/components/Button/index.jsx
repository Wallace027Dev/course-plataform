import { Container } from "./style";
import PropTypes from "prop-types";

export default function Button({
  children,
  onClick,
  variant,
  type
}) {
  return (
    <Container onClick={onClick} type={type} variant={variant}>
      {children}
    </Container>
  );
}

// Definição dos tipos e das props obrigatórias
Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(["filled", "outline"]).isRequired
};

// Definindo valores padrão (defaultProps) para props opcionais
Button.defaultProps = {
  type: "button",
  onClick: () => {}
};
