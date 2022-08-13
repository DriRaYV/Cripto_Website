import './comprar.css';
import { Link } from "react-router-dom"

function Comprar () {
  
  return (
    <div id='fundo-escuro'>
      <div id='fundo-claro'>
        <h1 id='title'>
            Vamos Comprar?<br/><br/> 
        </h1>

        <form >
          <div id='information2'>
                <div id='information3'>
                    <div className='label-div'>
                        <label>
                           Selecione a opção de compra
                            <div className='input-div'>
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
                            <div className='input-div'>
                                <input type="password" className='inputSenha'/>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div id='div-button'>
                <button type='submit' id='button2' >Comprar</button>
            </div>
            <h3>Acessar Minha<Link to='/carteira'>Carteira</Link></h3>
        </form>
      </div>
    </div>
  );
}

export default Comprar;