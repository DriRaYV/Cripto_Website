import './wallet.css';
import  { FaWallet } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import {DisplayTable} from './walletData'

function Wallet () {
  return (
     <main>
        <header>
          <div className='box12'>
            <h2>GBIT 〽️</h2>
            <div id="topics-nav2">
              <Link to="/usuario" className='topic1'>MEU PERFIL</Link>
              <Link to="/inicio" className='topic1'>INÍCIO</Link>
              <Link to="/carteira" className='topic1'>MINHA CARTEIRA</Link>
            </div>
          </div>

        </header>
        <div id='initial-div'>
        <h1>Minha Carteira</h1>
          <FaWallet className='FaWallet'/>
        </div>
        <section id="section-coins">
          <DisplayTable/>
        </section>
        <footer>
          <div id="div-footer">
            <p id="p-coin-market"><span id="p-span-yllw">VALOR TOTAL EM BRL:</span>387246396</p>
          </div>
        </footer>
     </main> 
  );
}

export default Wallet;