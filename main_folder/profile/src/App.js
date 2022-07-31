import logo from './logo.svg';
import './App.css';
import profilePicture from './pessoa.png'


function App() {


  return (
    <>
      <h1 id="MyUser-h1">MEU USUÁRIO</h1>
     
   

   <div id="DataInformations-MyUser">
    <div id = 'profile-upper-box' >
      <div id="user-img-div">
        <img src={profilePicture} alt="icone de uma pessoa" id="img-Person-MyUser"></img>
      </div>
      <h2 id="datas-person-Myuser">DADOS CADASTRAIS:</h2>
    </div>
    <p class="predata-MyUser" >NOME: <span class="recieveUserInformation-MyUser" id="name-MyUser">Maria Carda</span></p>
    

    <p class="predata-MyUser" >USUÁRIO: <span class="recieveUserInformation-MyUser" id="user-MyUser"></span></p>

    <p class="predata-MyUser">UF: <span class="recieveUserInformation-MyUser" id="uf-MyUser"></span></p>

    <p class="predata-MyUser">CEP: <span class="recieveUserInformation-MyUser" id="cep-MyUser"></span></p>

    <p class="predata-MyUser">RUA: <span class="recieveUserInformation-MyUser" id="street-MyUser"></span></p>

    <p class="predata-MyUser">NÚMERO RESIDÊNCIA: <span class="recieveUserInformation-MyUser" id="number-MyUser"></span></p>

    <p class="predata-MyUser">BAIRRO: <span class="recieveUserInformation-MyUser" id="district-MyUser"></span></p>
    

    <p class="predata-MyUser" className="recieveUserInformation-MyUser" id="city-MyUser">CIDADE:</p>
    
   </div>
    </>
  );
}

export default App;
