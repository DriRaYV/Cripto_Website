import './sign.css';

function App () {
  return (
    <div id='fundo-escuro'>
      <div id='fundo-claro'>
        <h1 id='title'>Vamos cadastrar o seu perfil?</h1>

        <form>
          <div id='informacoes'>
            <div id='informacao-esquerda'>
              <div className='div-label'>
                <label>
                  Insira seu nome:
                  <div className='div-input'>
                    <input type="text" className='input-esquerda'></input>
                  </div>
                </label>

                <label>
                  Insira um nome de usuário:
                  <div className='div-input'>
                    <input type="text" className='input-esquerda'></input>
                  </div>
                </label>

                <label>
                  Insira uma senha:
                  <div className='div-input'>
                    <input type="text" className='input-esquerda'></input>
                  </div>
                </label>

                <label>
                  Repita a senha:
                  <div className='div-input'>
                    <input type="text" className='input-esquerda'></input>
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
                      <input type="text" className='input-direita'></input>
                    </div>
                  </label>
                </div>

                <div id='div-endereco'>
                  <label>
                    Endereço:
                    <div className='div-input2'>
                      <input type="text" className='input-direita'></input>
                    </div>
                  </label>
                </div>

                <div id='div-info-maior'>
                  <div id='div-info-menor'>
                    <label>
                      Número:
                      <div className='div-input3'>
                        <input type="text" className='direita'></input>
                      </div>
                    </label>
                    <label>
                      Bairro:
                      <div className='div-input3'>
                        <input type="text" className='direita'></input>
                      </div>
                    </label>
                  </div>
                  <div id='div-info-menor'>
                    <label>
                      Cidade:
                      <div className='div-input3'>
                        <input type="text" className='direita'></input>
                      </div>
                    </label>
                    <label>
                      UF:
                      <div className='div-input3'>
                        <input type="text" className='direita'></input>
                      </div>
                    </label>
                  </div>
                </div>
                </div>     
            </div>
          </div>
          <div id='div-botao'>
            <input type='submit' value='CADASTRE-SE' id='botao'></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
