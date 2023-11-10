import { Link } from "react-router-dom";
import "./Cabecalho.scss";

export default function Cabecalho() {

  const handleLogout = ()=>{
    if(sessionStorage.getItem("token-user")){
      sessionStorage.removeItem('token-user');
      window.location.reload();
    }else{
      window.location = "/login";
    }
  }


  return (
    <>
      <header className="cabecalho">
        <h1>PRODUTOS</h1>

          <button onClick={handleLogout} style={sessionStorage.getItem("toke-user") ? {display:"inline"}:{display:"none"}}>LOGOUT</button>

        <ul>
          <li>
           <Link to="/">Home</Link>
          </li>
          <li>
           <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
        </ul>
      </header>
    </>
  );
}
