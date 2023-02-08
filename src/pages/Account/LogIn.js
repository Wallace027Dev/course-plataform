import { Link } from "react-router-dom";
import { Btn } from "../../components/Btn";
import { Account } from "./styled";

export default function LogIn() {
  return (
    <Account>
      <div>
        <h1>Login</h1>
      </div>
      {/* CONTAINER */}
      <section>
        <label>
          <p>Seu email</p>
          <input type="mail" />
          <p>Password</p>
          <input type="password" />
          <Btn className="btn">Logar</Btn>
        </label>
        <div>
          <p>
            Não tem uma conta?{" "}
            <Link className="lnk" to="/sign-up">
              Inscrever-se
            </Link>
          </p>
        </div>
      </section>
    </Account>
  );
}
