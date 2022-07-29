import './sign.css';
import { set, useForm } from "react-hook-form";
import { useRef, useState, useLayoutEffect } from 'react';
import { registerUser } from './registrerUser';

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


  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  function GetData(userData) {
    const signName = (`${userData.name}`)
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

  const passwd2 = useRef()


  // function verifyPassword(){
  //   if(password === "" && password2 === ""){
  //     alert ('As senhas não podem ser vazias')
  //   }
  //   if(password !== password2){
  //     alert('As senhas são diferentes! Tente Novamente')
  //   }

  // }

  function verifySigin() {
    fetch("https://musicapig.herokuapp.com/users/login", {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        username: username
      })
    }).then(response => verifyLogin(response))
  }
  async function verifyLogin(response) {
    const { message } = await response.json()
    const { status } = response

    if (status === 500) {
      alert(`erro no servidor: ${message}`)
    } else if (status === 401) {
      alert(message)
    } else if (status === 200) {
      alert(message)
    }
  }

  function siginData() {
    const data = JSON.stringify({
      username: username,
      senha: password,
      cep: cep,
      rua: address,
      number: number,
      uf: uf,
      district: district,
      city: city
    })
    registerUser(data)
  }

  function limpa_formulário_cep() {
    address = ("");
    district = ("");
    city = ("");
    uf = ("");
  }
  function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
      address = (conteudo.logradouro);
      district = (conteudo.bairro);
      city = (conteudo.localidade);
      uf = (conteudo.uf);
    }
    else {
      limpa_formulário_cep();
      alert("CEP não encontrado.");
    }
  }

  function pesquisacep(valor) {
    var cep = valor.replace(/\D/g, '');

    if (cep != "") {

      var validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {

        address = "...";
        district = "...";
        city = "...";
        uf = "...";

        fetch('https://viacep.com.br/ws/' + cep + '/json').then(responde => responde.json()).then(response => meu_callback(response))


      }
      else {
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
      }
    }
    else {
      limpa_formulário_cep();
    }
  };


  return (
    <div id='dark-background'>
      <div id='light-background'>
        <h1 id='title'>Vamos cadastrar o seu perfil?</h1>

        <form onSubmit={handleSubmit(GetData)}>
          <div id='information'>
            <div id='left-information'>
              <div className='div-label'>
                <label>
                  Insira um nome de usuário:
                  <div className='div-input'>
                    <input type="text" className='input-left' {...register("userName")} onBlur={verifySigin()} />
                  </div>
                </label>

                <label>
                  Insira uma senha:
                  <div className='div-input'>
                    <input type="password" className='input-left' {...register("password")} />
                  </div>
                </label>

                <label>
                  Repita a senha:
                  <div className='div-input'>
                    <input type="password" className='input-left' id='input-passwd2' {...register("confirmPassword")} ref={passwd2} />
                  </div>
                </label>
              </div>
            </div>

            <div id='right-information'>
              <div className='div-label'>
                <div id='div-cep'>
                  <label>
                    Insira o CEP:
                    <div className='div-input2'>
                      <input type="text" className='input-right' {...register("cep")} />
                    </div>
                  </label>
                </div>

                <div id='div-endereco'>
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
          <div id='div-button'>
            <button type='submit' id='botao' onClick={siginData()}>CADASTRE-SE</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Sign;
