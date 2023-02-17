import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { Btn } from "../../styles/Btn";
import { Account } from "./styled";

export default function ForgotPassword() {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    try {
      await resetPassword(email);
      alert("Foi enviado um email para resetar sua senha");
      navigate("/log-in");
    } catch {
      alert("Ocorreu um erro ao tentar resetar sua senha");
    }

    setLoading(false);
  }

  return (
    <Account>
      <div>
        <h1>Esqueci minha senha</h1>
        <p>Não fique sem estudar!</p>
      </div>
      <section>
        <form onSubmit={handleSubmit}>
          <label>Seu email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Btn disabled={loading} className="btn">
            Recuperar senha
          </Btn>
        </form>
        <div>
          <p>
            Já tem uma conta?{" "}
            <Link className="lnk" to="/log-in">
              Login
            </Link>
          </p>
        </div>
      </section>
    </Account>
  );
}
