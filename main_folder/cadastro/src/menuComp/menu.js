import './menu.css'
import { Link } from "react-router-dom"

function Menu() {
  function afuncao() {
    fetch("https://musicapig.herokuapp.com/coins",{
  method:"GET",
  headers:{
    'Content-Type': 'application/json'
  }
}).then(response => response.json())
.then(response => ()=>{
  console.log(response)
})
  }

return (
  <div id='div-suprema'>
     <div className='box1'>
        <h2 id='GBIT'>GBIT 〽️</h2>
        <div id="topics-nav">
            <Link to="/user" className='topic1'>MEU PERFIL</Link>
            <Link to="/home" className='topic1'>INÍCIO</Link>
            <Link to="/wallet" className='topic1'>MINHA CARTEIRA</Link>
      </div>
  </div>
    <div id='cotainer'>
      <div id="welcome-title">
        <h1>Olá, Maria! 👋</h1>
      </div>
      <div id='subtitle'>
        <h3> Vai um Bit?</h3>
      </div>
      <div id='box-flex'>
        <div className='box'>
          <div id='box-text'>
            <div className='coin-number spacing-table'>
              <p id='f'>1</p>
              <p id='g'>2</p>
              <p id='h'>3</p>
              <p id='i'>4</p>
              <p id='j'>5</p>
            </div>
            <div className='coin-name spacing-table2'>
              <p id='one'>BITCOIN</p>
              <p id='two'>ETHEREUM</p>
              <p id='three'>BUSD</p>
              <p id='four'>BNB</p>
              <p id='five'>BUSD</p>
            </div>
            <div className='coin-price spacing-table3'>
              <p id='a'>19.991,30USD</p>
              <p id='b'>1.098,64USD</p>
              <p id='c'>1,0008USD</p>
              <p id='d'>225,77USD</p>
              <p id='e'>1,0008USD</p>
            </div>
            <div className='coin-number spacing-table'>
              <p>6</p>
              <p>7</p>
              <p>8</p>
              <p>9</p>
              <p>10</p>
            </div>
            <div className='coin-name spacing-table5'>
              <p>BITCOIN</p>
              <p>ETHEREUM</p>
              <p>BUSD</p>
              <p>BNB</p>
              <p>BUSD</p>
            </div>
            <div className='coin-price spacing-table6'>
              <p>19.991,30USD</p>
              <p>1.098,64USD</p>
              <p>1,0008USD</p>
              <p>225,77USD</p>
              <p>1,0008USD</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button onClick={afuncao}>popopo</button>
  </div>
);
  }

export default Menu ;
