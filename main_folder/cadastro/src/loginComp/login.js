import './userLogin.css';
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"
import { useState } from 'react'

function Login () {

  const { register, handleSubmit } = useForm();

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  
  function GetData(userData){
      const loginUserName = (`${userData.userName}`)
      const loginPassword = (`${userData.password}`)

      setUsername(loginUserName)
      setPassword(loginPassword)
  }

  const verifyLogin  = () =>{
    fetch("https://musicapig.herokuapp.com/users/login ", {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        username: username,
        password_user: password
      })
    }).then(response => verify(response))

    async function verify(response) {
      const { message } = await response.json()
      const { status } = response
  
      if (status === 500) {
        alert(`erro no servidor: ${console.error}`)
      } else if (status === 401) {
        alert(message)
        // window.location('/inicio')
      } else if (status === 404) {
        alert(message)
      }
    }
    }
    console.log(username,password )

  
  return (
    <div id='fundo-escuro'>
      <div id='fundo-claro'>
        <h1 id='title'>
            Seja bem vindo!!<br/><br/> Login:
        </h1>

        <form onChange={handleSubmit(GetData)}>
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
                <button type='submit' id='botao' onClick={verifyLogin}>ENTRAR</button>
            </div>
            <h3>Não possui conta? <Link to='/SignUp'>CADASTRE-SE</Link></h3>
        </form>
      </div>
    </div>
  );
}

export default Login;