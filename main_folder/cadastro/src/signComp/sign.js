import './sign.css';
import { useForm } from "react-hook-form";

function Sign () {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  function GetData(userData){
    const signName = (`name: ${userData.name}`)
    const signUserName = (`userName: ${userData.userName}`)
    const signPassword = (`password: ${userData.password}`)
    const signConfirmPassword = (`confirmPassword: ${userData.confirmPassword}`)
    const signCep = (`cep: ${userData.cep}`)
    const signAddress = (`address: ${userData.address}`)
    const signNumber = (`number: ${userData.number}`)
    const signDistrict = (`district: ${userData.district}`)
    const signCity = (`city: ${userData.city}`)
    const signUf = (`uf: ${userData.uf}`)

    // console.log(signName);
    // console.log(signUserName);
    // console.log(signPassword);
    // console.log(signConfirmPassword);
    // console.log(signCep);
    // console.log(signAddress);
    // console.log(signNumber);
    // console.log(signDistrict);
    // console.log(signCity);
    // console.log(signUf);
  }

  return (
    <div id='dark-background'>
      <div id='light-background'>
        <h1 id='title'>Vamos cadastrar o seu perfil?</h1>

        <form onSubmit={handleSubmit(GetData)}>
          <div id='information'>
            <div id='left-information'>
              <div className='div-label'>
                <label>
                  Insira seu nome:
                  <div className='div-input'>
                    <input type="text" className='input-left' {... register("name")} />
                  </div>
                </label>

                <label>
                  Insira um nome de usuário:
                  <div className='div-input'>
                    <input type="text" className='input-left' {... register("userName")} />
                  </div>
                </label>

                <label>
                  Insira uma senha:
                  <div className='div-input'>
                    <input type="password" className='input-left' {... register("password")} />
                  </div>
                </label>

                <label>
                  Repita a senha:
                  <div className='div-input'>
                    <input type="password" className='input-left' {... register("confirmPassword")} />
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
                      <input type="text" className='input-right' {... register("cep")} />
                    </div>
                  </label>
                </div>

                <div id='div-endereco'>
                  <label>
                    Endereço:
                    <div className='div-input2'>
                      <input type="text" className='input-right' {... register("address")} />
                    </div>
                  </label>
                </div>

                <div id='div-info-large'>
                  <div id='div-info-small'>
                    <label>
                      Número:
                      <div className='div-input3'>
                        <input type="text" className='right' {... register("number")} />
                      </div>
                    </label>
                    <label>
                      Bairro:
                      <div className='div-input3'>
                        <input type="text" className='right' {... register("district")} />
                      </div>
                    </label>
                  </div>
                  <div id='div-info-small'>
                    <label>
                      Cidade:
                      <div className='div-input3'>
                        <input type="text" className='right' {... register("city")} />
                      </div>
                    </label>
                    <label>
                      UF:
                      <div className='div-input3'>
                        <input type="text" className='right' {... register("uf")} />
                      </div>
                    </label>
                  </div>
                </div>
                </div>     
            </div>
          </div>
          <div id='div-button'>
            <button type='submit' id='botao'>CADASTRE-SE</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Sign;
