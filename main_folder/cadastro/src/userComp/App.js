import "./App.css";
import profilePicture from "./pessoa.png";
import { Link } from "react-router-dom"

function User() {
  return (
    <>
      <header>
        <div className="boxoka">
          <h2 id="piriri">GBIT 〽️</h2>
          <div id="topics-nav2">
            <Link to='/user'className="topic1">MEU PERFIL</Link>
            <Link to='/home'className="topic1">INÍCIO</Link>
            <Link to='/wallet'className="topic1">CARTEIRA</Link>
          </div>
        </div>
      </header>
      <div id="supDiv">
        <div id="amarela">
          <img id="profile-image" src={profilePicture}></img>
          <div id="devizinha">
            <h1 id="dados">Dados Cadastrais:</h1>
          </div>
        </div>
        <div id="dadada">
          <div id="praela">
            <p className='paragarfo'>Usuário:</p>
            <p className='paragarfo'>CEP:</p>
            <p className='paragarfo'>Rua:</p>
            <p className='paragarfo'>Número:</p>
            <p className='paragarfo'>Bairro:</p>
            <p className='paragarfo'>Cidade:</p>
            <p className='paragarfo'>UF:</p>
          </div>
          <div id="resultados">
            <p className='paragarfo'>username</p>
            <p className='paragarfo'>Cep esse msm</p>
            <p className='paragarfo'>Rua dos bobos</p>
            <p className='paragarfo'>Numero 0</p>
            <p className='paragarfo'>Bairro do limoeiro</p>
            <p className='paragarfo'>Cidade de deus</p>
            <p className='paragarfo'>UFC</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;
