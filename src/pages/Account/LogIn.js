import { Link } from "react-router-dom";
import { Btn } from "../../styles/Btn";
import { Account } from "./styled";

export default function LogIn() {
  return (
    <Account>
      <div>
        <h1>Login</h1>
      </div>
      {/* CONTAINER */}
      <section>
        <form>
          <label>Seu email</label>
          <input type="mail" />
          <label>Password</label>
          <input type="password" />
          <Link to="/verified">
            <Btn className="btn">Logar</Btn>
          </Link>
        </form>
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
