import './sign.css';
import {  useForm } from "react-hook-form";
import {  useState } from 'react';

function Sign() {

  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [password2, setPassword2] = useState()
  const [cep, setCep] = useState()
  const [address, setAddress] = useState()
  const [number, setNumber] = useState()
  const [district, setDistrict] = useState()
  const [city, setCity] = useState()
  const [uf, setUf] = useState()


  const { register, handleSubmit,setValue } = useForm();

  function GetData(userData) {
    const signUserName = (`${userData.userName}`)
    const signPassword = (`${userData.password}`)
    const signConfirmPassword = (`${userData.confirmPassword}`)
    const signCep = (`${userData.cep}`)
    const signAddress = (`${userData.address}`)
    const signNumber = (`${userData.number}`)
    const signDistrict = (`${userData.district}`)
    const signCity = (`${userData.city}`)
    const signUf = (`${userData.uf}`)

    setUsername(signUserName)
    setPassword(signPassword)
    setPassword2(signConfirmPassword)
    setCep(signCep)
    setAddress(signAddress)
    setNumber(signNumber)
    setDistrict(signDistrict)
    setCity(signCity)
    setUf(signUf)


  }

    const verifyUsername = () => {
      fetch("https://musicapig.herokuapp.com/users/exists ", {
        headers: {
          'Content-Type': 'application/json'
        },
      method: 'POST',
      body: JSON.stringify({
        username: username
      })
    }).then(response => verifyLogin(response))

    async function verifyLogin(response) {
      const { message } = await response.json()
      const { status } = response
  
      if (status === 500) {
        alert(`erro no servidor: ${message}`)
      } else if (status === 401) {
        alert(message)
      } else if (status === 404) {
        alert(message)
      }
    }
    }

    const submitData = () =>{
      
      fetch(`https://musicapig.herokuapp.com/users`, {
          method: "POST",
          headers:{
              'Content-Type':"application/json"
          },
          body:JSON.stringify({
              username: username,
              password_user:password, 
              user_address:cep,
              cep: address,
              house_number  : number,
              uf: uf,
              district: district, 
              city: city
  
          })
      }).then(alert('usuário registrado'))
  }

  const checkPassword = () =>{
    if(password === "" && password2 === ""){
      alert ('As senhas não podem ser vazias')
    }
    else if(password !== password2){
      alert('As senhas são diferentes! Tente Novamente')
    }

    else{
      return true
    }

  }

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.json()).then(data => {
      setValue('address', data.logradouro)
      setValue('district',data.bairro)
      setValue('city',data.localidade)
      setValue('uf',data.uf)
    })
  }


  return (
    <div id='dark-background'>
      <div id='light-background'>
        <h1 id='title-sign'>Vamos cadastrar o seu perfil?</h1>

        <form id='form1' onChange={handleSubmit(GetData)}>
          <div id='information'>
            <div id='left-information'>
              <div className='div-label'>
                <label>
                  Insira um nome de usuário:
                  <div className='div-input'>
                    <input type="text" className='input-left' {...register("userName")} onBlur={verifyUsername} />
                  </div>
                </label>

                <label>
                  Insira uma senha:
                  <div className='div-input'>
                    <input type="password" className='input-left' {...register("password")}/>
                  </div>
                </label>

                <label>
                  Repita a senha:
                  <div className='div-input'>
                    <input type="password" className='input-left' id='input-passwd2' {...register("confirmPassword")} onBlur={checkPassword} />
                  </div>
                </label>
                <div id='div-botao'>
                  <button type='submit' id='bottom' onClick={submitData}>CADASTRE-SE</button>
                </div>
              </div>
            </div>

            <div id='right-information'>
              <div className='div-label'>
                <div id='div-cep'>
                  <label>
                    Insira o CEP:
                    <div className='div-input2'>
                      <input type="text" className='input-right' {...register("cep")} onBlur={checkCEP}/>
                    </div>
                  </label>
                </div>

                <div id='div-address'>
                  <label>
                    Endereço:
                    <div className='div-input2'>
                      <input type="text" className='input-right' {...register("address")} />
                    </div>
                  </label>
                </div>

                <div id='div-info-large'>
                  <div id='div-info-small'>
                    <label>
                      Número:
                      <div className='div-input3'>
                        <input type="text" className='right' {...register("number")} />
                      </div>
                    </label>
                    <label>
                      Bairro:
                      <div className='div-input3'>
                        <input type="text" className='right' {...register("district")} />
                      </div>
                    </label>
                  </div>
                  <div id='div-info-small'>
                    <label>
                      Cidade:
                      <div className='div-input3'>
                        <input type="text" className='right' {...register("city")} />
                      </div>
                    </label>
                    <label>
                      UF:
                      <div className='div-input3'>
                        <input type="text" className='right' {...register("uf")} />
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div id='div-button'>
            <button type='submit' id='bottom' onClick={submitData}>CADASTRE-SE</button>
          </div> */}
        </form>
      </div>
    </div>
  );
}

export default Sign;


