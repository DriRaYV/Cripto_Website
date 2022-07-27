import './inicial.css';
import { useForm } from "react-hook-form";

function Login () {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  function GetData(userData){
    console.log(userData)
  }

  return (
    <div id='fundo-escuro'>
      <div id='fundo-claro'>
        <h1 id='title'>
            Seja bem vindo!!<br/><br/> Login:
        </h1>

        <form onSubmit={handleSubmit(GetData)}>
          <div id='information'>
                <div id='informacao-esquerda'>
                    <div className='div-label'>
                        <label>
                            Nome de usuário:
                            <div className='div-input'>
                                <input type="text" id='inputUsername' {... register("userName")} />
                            </div>
                        </label>

                        <label>
                            Insira sua senha:
                            <div className='div-input'>
                                <input type="password" className='inputSenha' {... register("password")} />
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div id='div-botao'>
                <button type='submit' id='botao'>ENTRAR</button>
            </div>
            <h3>Não possui conta? <a href="">Cadastre-se</a></h3>
        </form>
      </div>
    </div>
  );
}

export default Login;
