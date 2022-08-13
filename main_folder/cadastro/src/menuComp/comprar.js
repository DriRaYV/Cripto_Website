import './comprar.css';
import { Link } from "react-router-dom"

function Comprar () {
  
  return (
    <div id='fundo-black'>
      <div id='fundo-light'>
        <h1 id='title-comprar'>
            Vamos Comprar?<br/> 
        </h1>

        <form >
          <div id='information2-comprar'>
                <div id='information3-comprar'>
                    <div className='label-div-comprar'>
                        <label>
                           Selecione a opção de compra
                            <div className='input-div-comprar'>
                                <select>
                                  <option>Bitcoin</option>
                                  <option>Ethereun</option>
                                  <option>Tether</option>
                                  <option>USD</option>
                                  <option>USDC</option>
                                  <option>Binance Coin</option>
                                  <option>Binance USD</option>
                                  <option>HEX</option>
                                  <option>Cardano</option>
                                  <option>XRP</option>
                                  <option>Solana</option>
                                </select>
                            </div>
                        </label>
                        <br/>
                        <label>
                            Quantidade
                            <div className='input-div-comprar'>
                                <input type="password" className='inputSenha-comprar'/>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div id='div-button-comprar'>
                <button type='submit' id='button2-comprar' >Comprar</button>
            </div>
            <h3>Acessar Minha<Link to='/carteira'>Carteira</Link></h3>
        </form>
      </div>
    </div>
  );
}

export default Comprar;