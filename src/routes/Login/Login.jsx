import { useState } from "react"

export default function Login() {

    //Criar um useState para armazenar o objUsuário, que será preenchido no Formulário.{email,senha}.
    const [usuario, setUsuario] = useState({
        email: "",
        senha: ""
    })

    //Criar a função handleChange para preenchimento do objUsuário, através do evento onChange.
    const handleChange = (e)=>{
        //Inicialmente desestruturamos os dados que estão sendo utilizados no evento, para que
        // posteriormente possam ser inseridos no objUsuário.
        const {name , value} = e.target;

        //Preenchendo o objUsuário com o auxílio do operador SPREAD.
        setUsuario({...usuario,[name]:value});
    }
    
    //Criando a função handleSubmit que realizará a validação dos digitados pelo usuário, contra os dados recebidos da nossa API-JSON.
    const handleSubmit = async  (e)=>{
        e.preventDefault();

        //Declarando uma variável que vai conter o usuário retornado na validação:
        let user;

        try {
            const response = await fetch("http://localhost:5000/usuarios");
            if(response.ok){
                const data = await response.json();

                //Realizando a validação utilizando find.
                user = data.find((u)=> u.email == usuario.email && u.senha == usuario.senha);

                if(user){
                    alert('Login realizado com sucesso!');
                    //Gerando o token do usuário:
                    const token = Math.random().toString(32).substring(2) + Math.random().toString(32).substring(2);

                    //Armazenar o token na sessionStorage:
                    sessionStorage.setItem("token-user", token);
                }else{
                    alert('Senha ou usuário inválidos!!');
                    setUsuario({
                        email:"",
                        senha:"",
                    });
                }

            }
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <div>
            <h1>Identificação de Usuários</h1>

            <div>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend>LOGIN</legend>
                        <div>
                            <label htmlFor="idEmail">EMAIL:</label>
                            <input type="email" name="email" id="idEmail" placeholder="Digite seu EMAIL:" value={usuario.nome} onChange={handleChange}/>
                        </div>
                        <div>
                            <label htmlFor="idSenha">SENHA:</label>
                            <input type="password" name="senha" id="idSenha" placeholder="Digite sua SENHA:" value={usuario.senha} onChange={handleChange}/>
                        </div>
                        <div>
                            <button>ENTRAR</button>
                        </div>
                    </fieldset>
                </form>
            </div>
    </div>
  )
}
