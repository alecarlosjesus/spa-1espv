
export default function Login() {
  return (
    <div>
            <h1>Identificação de Usuários</h1>

            <div>
                <form >
                    <fieldset>
                        <legend>LOGIN</legend>
                        <div>
                            <label htmlFor="idEmail">EMAIL:</label>
                            <input type="email" name="email" id="idEmail" placeholder="Digite seu EMAIL:" value=""/>
                        </div>
                        <div>
                            <label htmlFor="idSenha">SENHA:</label>
                            <input type="password" name="senha" id="idSenha" placeholder="Digite sua SENHA:" value=""/>
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

