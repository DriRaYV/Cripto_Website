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
    
    {  function afuncao() {
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
    console.log(moeda1);
  })
    }}
    
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
              <p id='one'>{moeda1.name}</p>
              <p id='two'>{moeda2.name}</p>
              <p id='three'>{moeda3.name}</p>
              <p id='four'>{moeda4.name}</p>
              <p id='five'>{moeda5.name}</p>
            </div>
            <div className='coin-price spacing-table3'>
              <p id='a'>{moeda1.price}</p>
              <p id='b'>{moeda2.price}</p>
              <p id='c'>{moeda3.price}</p>
              <p id='d'>{moeda4.price}</p>
              <p id='e'>{moeda5.price}</p>
            </div>
            <div className='coin-number spacing-table'>
              <p>6</p>
              <p>7</p>
              <p>8</p>
              <p>9</p>
              <p>10</p>
            </div>
            <div className='coin-name spacing-table5'>
              <p>{moeda6.name}</p>
              <p>{moeda7.name}</p>
              <p>{moeda8.name}</p>
              <p>{moeda9.name}</p>
              <p>{moeda10.name}</p>
            </div>
            <div className='coin-price spacing-table6'>
              <p>{moeda6.price}</p>
              <p>{moeda7.price}</p>
              <p>{moeda8.price}</p>
              <p>{moeda9.price}</p>
              <p>{moeda10.price}</p>
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
