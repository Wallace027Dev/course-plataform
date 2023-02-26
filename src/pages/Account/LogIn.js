import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { Btn } from "../../styles/Btn";
import { Account } from "./styled";

export default function LogIn() {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    if (password.length < 6) {
      alert("Sua senha deve ter no mínimo 6 caracteres!");
      setLoading(false);
      return;
    }

    try {
      await signIn(email, password);
      navigate("/home");
    } catch (error) {
      console.log(error.message);
      alert("Ocorreu um erro ao tentar efetuar o login");
    }

    setLoading(false);
  }

  return (
    <Account>
      <div>
        <h1>Login</h1>
        <p>Insira suas informações e se torne um desenvolvedor.</p>
      </div>
      <section>
        <form onSubmit={handleSubmit}>
          <label>Seu email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Btn disabled={loading} className="btn">
            Login
          </Btn>
        </form>
        <div>
          <p>
            Não tem uma conta?{" "}
            <Link className="lnk" to="/sign-up">
              Inscrever-se
            </Link>
          </p>
          <p>
            Esqueceu a senha?{" "}
            <Link className="lnk" to="/forgot-password">
              Resetar senha
            </Link>
          </p>
        </div>
      </section>
    </Account>
  );
}
