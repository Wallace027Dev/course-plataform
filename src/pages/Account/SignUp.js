import { Btn } from "../../styles/Btn";
import { Link } from "react-router-dom";
import { Account } from "./styled";
import { useState } from "react";
import { useAuth } from "../../context/authContext";

export default function SignUp() {
  const { signUp } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (password.length < 6) {
      alert("Sua senha deve ter no mínimo 6 caracteres!");
      return;
    }

    if (password !== confirmPassword) {
      alert("As senhas não conferem!");
    }

    try {
      await signUp(email, password);
    }
		catch (error) {
      alert("Ocorreu um erro ao tentar criar o usuário");
    }
  }

  return (
    <Account>
      <div>
        <h1>Inscreva-se</h1>
        <p>Insira suas informações e se torne um desenvolvedor.</p>
      </div>
      {/* CONTAINER */}
      <section>
        <form onSubmit={handleSubmit}>
          <label>Seu email</label>
          <input
            type="mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label>Confirmação de senha</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Btn className="btn">Criar conta</Btn>
        </form>
        <div>
          <p>Ao criar uma conta, você aceita programar & tomar muito café.</p>
        </div>
        <div>
          <p>
            Já tem uma conta?{" "}
            <Link className="lnk" to="/log-in">
              Logar
            </Link>
          </p>
        </div>
      </section>
    </Account>
  );
}
