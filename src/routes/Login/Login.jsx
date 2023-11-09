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

    
  return (
    <div>
            <h1>Identificação de Usuários</h1>

            <div>
                <form >
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

