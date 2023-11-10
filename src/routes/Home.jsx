
export default function Home() {

  document.title = "HOME";
  if(sessionStorage.getItem("token-user")){
  return (
    <div>
      <h1>Home</h1>
      <div>
        <figure>
          <figcaption>PRODUTOS EM OFERTA</figcaption>
          <img src="/img/supermercado_640.png" alt="Prateleira de Produtos." />
        </figure>
      </div>
    </div>
  )}else{
    window.location.href = "/login";
  }
}

