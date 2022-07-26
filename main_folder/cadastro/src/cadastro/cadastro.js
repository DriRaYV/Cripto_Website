import './sign.css';
import { useForm } from "react-hook-form";

function App () {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  function GetData(userData){
    console.log(userData)
  }

  return (
    <div id='fundo-escuro'>
      <div id='fundo-claro'>
        <h1 id='title'>Vamos cadastrar o seu perfil?</h1>

        <form onSubmit={handleSubmit(GetData)}>
          <div id='informacoes'>
            <div id='informacao-esquerda'>
              <div className='div-label'>
                <label>
                  Insira seu nome:
                  <div className='div-input'>
                    <input type="text" className='input-esquerda' {... register("name")} />
                  </div>
                </label>

                <label>
                  Insira um nome de usuário:
                  <div className='div-input'>
                    <input type="text" className='input-esquerda' {... register("userName")} />
                  </div>
                </label>

                <label>
                  Insira uma senha:
                  <div className='div-input'>
                    <input type="password" className='input-esquerda' {... register("password")} />
                  </div>
                </label>

                <label>
                  Repita a senha:
                  <div className='div-input'>
                    <input type="password" className='input-esquerda' {... register("confirmPassword")} />
                  </div>
                </label>
              </div>
            </div>

            <div id='informacao-direita'>
                <div className='div-label'>
                <div id='div-cep'>
                  <label>
                    Insira o CEP:
                    <div className='div-input2'>
                      <input type="text" className='input-direita' {... register("cep")} />
                    </div>
                  </label>
                </div>

                <div id='div-endereco'>
                  <label>
                    Endereço:
                    <div className='div-input2'>
                      <input type="text" className='input-direita' {... register("address")} />
                    </div>
                  </label>
                </div>

                <div id='div-info-maior'>
                  <div id='div-info-menor'>
                    <label>
                      Número:
                      <div className='div-input3'>
                        <input type="text" className='direita' {... register("number")} />
                      </div>
                    </label>
                    <label>
                      Bairro:
                      <div className='div-input3'>
                        <input type="text" className='direita' {... register("district")} />
                      </div>
                    </label>
                  </div>
                  <div id='div-info-menor'>
                    <label>
                      Cidade:
                      <div className='div-input3'>
                        <input type="text" className='direita' {... register("city")} />
                      </div>
                    </label>
                    <label>
                      UF:
                      <div className='div-input3'>
                        <input type="text" className='direita' {... register("uf")} />
                      </div>
                    </label>
                  </div>
                </div>
                </div>     
            </div>
          </div>
          <div id='div-botao'>
            <button type='submit' id='botao'>CADASTRE-SE</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
