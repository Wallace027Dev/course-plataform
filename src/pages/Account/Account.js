import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { Btn } from "../../styles/Btn";
import { Account } from "./styled";
import perfil from "../../images/perfil.svg";

export default function AccountPage() {
  const { currentUser, logOut } = useAuth();
  const navigate = useNavigate();

  async function handleLogout(e) {
    e.preventDefault();

    try {
      await logOut();
      navigate("/");
    } catch {
      alert("Ocorreu um erro ao tentar efetuar seu logout");
    }
  }

  return (
    <Account>
      <div className="info-perfil center">
        <div>
          <h1>Minha conta</h1>
          <p>Email: {currentUser.email}</p>
        </div>
        <div>
          <img src={perfil} alt="Foto de Perfil" />
        </div>
      </div>
      <section>
        <form>
          <Btn onClick={handleLogout} className="btn">
            Logout
          </Btn>
        </form>
        <div>
          <p>
            Voltar para a{" "}
            <Link className="lnk" to="/home">
              home
            </Link>
            ?
          </p>
        </div>
      </section>
    </Account>
  );
}
