import './userLogin.css';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"

function Login () {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  function GetData(userData){
      const userName = (`userName: ${userData.userName}`)
      const password = (`password: ${userData.password}`)
  }

  return (
    <div id='fundo-escuro'>
      <div id='fundo-claro'>
        <h1 id='title'>
            Seja bem vindo!!<br/><br/> Login:
        </h1>

        <form onSubmit={handleSubmit(GetData)}>
          <div id='information2'>
                <div id='information3'>
                    <div className='label-div'>
                        <label>
                            Nome de usuário:
                            <div className='input-div'>
                                <input 
                                  type="text" 
                                  id='inputUsername' 
                                  {... register("userName")}
                                />
                            </div>
                        </label>
                        <br/>
                        <label>
                            Insira sua senha:
                            <div className='input-div'>
                                <input type="password" className='inputSenha' {... register("password")} />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div id='div-button'>
                <button type='submit' id='botao'>ENTRAR</button>
            </div>
            <h3>Não possui conta? <Link to='/cadastro'>CADASTRE-SE</Link></h3>
        </form>
      </div>
    </div>
  );
}

export default Login;