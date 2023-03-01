import { Link, useLocation } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import perfil from "../../images/perfil.svg";

function Navigation() {
  const location = useLocation();
  const showAccountLink = location.pathname === "/home";

  const NavStyled = styled.div`
    .account {
      text-decoration: none;
      font-weight: 700;
      font-size: 1.2rem;
      color: var(--light-gray);
    }
  `;

  return (
    <NavStyled className="link-account">
      {showAccountLink && (
        <Link className="account" to="/account-info">
          <img src={perfil} alt="Foto de Perfil" />
        </Link>
      )}
    </NavStyled>
  );
}

export default Navigation;
