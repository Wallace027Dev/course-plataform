import { Btn } from "../../styles/Btn";
import { Link } from "react-router-dom";
import { Account } from "./styled";

export default function SignUp() {
  return (
    <Account>
      <div>
        <h1>Inscreva-se</h1>
        <p>Insira suas informações e se torne um desenvolvedor.</p>
      </div>
      {/* CONTAINER */}
      <section>
        <label>
          <p>Seu email</p>
          <input type="mail" />
          <p>Password</p>
          <input type="password" />
          <Btn className="btn">Criar conta</Btn>
          <div>
            <p>Ao criar uma conta, você aceita programar & tomar muito café.</p>
          </div>
        </label>
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
