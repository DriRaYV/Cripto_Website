import "./menu.css";
import { Link } from "react-router-dom";

function Menu() {
  function coinfunction() {
    fetch("https://musicapig.herokuapp.com/coins",{
  method:"GET",
  headers:{
    'Content-Type': 'application/json'
  }
}).then(response => response.json())
.then(response => ()=>{
  var moeda1 = response[0]
  var moeda2 = response[1]
  var moeda3 = response[2]
  var moeda4 = response[3]
  var moeda5 = response[4]
  var moeda6 = response[5]
  var moeda7 = response[6]
  var moeda8 = response[7]
  var moeda9 = response[8]
  var moeda10 = response[10]
})
  }

return (
  <div id='div-suprema'>
    
    {  function coinfunction() {
      fetch("https://musicapig.herokuapp.com/coins",{
    method:"GET",
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(response => response.json())
  .then(response => ()=>{
    const moeda1 = response[0]
    const moeda2 = response[1]
    const moeda3 = response[2]
    const moeda4 = response[3]
    const moeda5 = response[4]
    const moeda6 = response[5]
    const moeda7 = response[6]
    const moeda8 = response[7]
    const moeda9 = response[8]
    const moeda10 = response[10]
  })
    }}
    
     <div className='box1'>
        <h2 id='GBIT'>GBIT 〽️</h2>
        <div id="topics-nav">
            <Link to="/usuário" className='topic1'>MEU PERFIL</Link>
            <Link to="/inicio" className='topic1'>INÍCIO</Link>
            <Link to="/carteira" className='topic1'>MINHA CARTEIRA</Link>
      </div>
    </div>
    <div id="cotainer">
        <div id="welcome-title">
          <h1>Olá, Maria! 👋</h1>
        </div>
        <div id="subtitle">
          <h3> Vai um Bit?</h3>
        </div>
        <div id="box-flex">
          <div className="box">
            <div id="box-text">
              <div className="coin-number spacing-table">
                <p id="f">1</p>
                <p id="g">2</p>
                <p id="h">3</p>
                <p id="i">4</p>
                <p id="j">5</p>
              </div>
              <div className="coin-name spacing-table2">
                <p id="one">Bitcoin</p>
                <p id="two">Ethereum</p>
                <p id="three">Tether USD</p>
                <p id="four">USDC</p>
                <p id="five">Binance Coin</p>
              </div>
              <div className="coin-price spacing-table3">
                <p id="a">23130.36361826236</p>
                <p id="b">1650.4133277656535</p>
                <p id="c">1.00029297992368</p>
                <p id="d">0.9998310422880105</p>
                <p id="e">284.8664096764542</p>
              </div>
              <div className="coin-number spacing-table">
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
              </div>
              <div className="coin-name spacing-table5">
                <p>Binance USD</p>
                <p>XRP</p>
                <p>Cardano</p>
                <p>Solana</p>
                <p>HEX</p>
              </div>
              <div className="coin-price spacing-table6">
                <p>0.9997942783811001</p>
                <p>0.3754137137610844</p>
                <p>0.5024320127940958</p>
                <p>41.31609432704099</p>
                <p>0.04531988379233773</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
);
  }

export default Menu;
