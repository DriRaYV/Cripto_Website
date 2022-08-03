import "./App.css";
import profilePicture from "./pessoa.png";
import { Link } from "react-router-dom"

function User() {
  return (
    <>
      <header>
        <div className="boxoka">
          <h2 id="navbar-nickname">GBIT 〽️</h2>
          <div id="topics-nav2">
            <Link to='/usuário'className="topic1">MEU PERFIL</Link>
            <Link to='/inicial'className="topic1">INÍCIO</Link>
            <Link to='/carteira'className="topic1">CARTEIRA</Link>
          </div>
        </div>
      </header>
      <div id="supDiv">
        <div id="yellow-line">
          <img id="profile-image" src={profilePicture}></img>
          <div id="box-info">
            <h1 id="data">Dados Cadastrais:</h1>
          </div>
        </div>
        <div id="info">
          <div id="info-name">
            <p className='paragraph'>Usuário:</p>
            <p className='paragraph'>CEP:</p>
            <p className='paragraph'>Rua:</p>
            <p className='paragraph'>Número:</p>
            <p className='paragraph'>Bairro:</p>
            <p className='paragraph'>Cidade:</p>
            <p className='paragraph'>UF:</p>
          </div>
          <div id="results">
            <p className='paragraph'>username</p>
            <p className='paragraph'>Cep esse msm</p>
            <p className='paragraph'>Rua dos bobos</p>
            <p className='paragraph'>Numero 0</p>
            <p className='paragraph'>Bairro do limoeiro</p>
            <p className='paragraph'>Cidade de deus</p>
            <p className='paragraph'>UFC</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
