import "./menu.css";
import { Link } from "react-router-dom";
import React from "react";
import DataFetching from "./coinFetchs/fetchCoin";
import DataFetching2 from "./coinFetchs/fetchCoin2";
import DataFetching3 from "./coinFetchs/fetchCoin3.js";
import DataFetching4 from "./coinFetchs/fetchCoin4.js";
import DataFetching5 from "./coinFetchs/fetchCoin5";
import DataFetching6 from "./coinFetchs/fetchCoin6";
import DataFetching7 from "./coinFetchs/fetchCoin7";
import DataFetching8 from "./coinFetchs/fetchCoin8.js";
import DataFetching9 from "./coinFetchs/fetchCoin9.js";
import DataFetching10 from "./coinFetchs/fetchCoin10";
import DataFetchingName from './coinNameFetchs/fetchName1.js';
import DataFetchingName2 from './coinNameFetchs/fetchName2.js';
import DataFetchingName3 from './coinNameFetchs/fetchName3.js';
import DataFetchingName4 from './coinNameFetchs/fetchName4.js';
import DataFetchingName5 from './coinNameFetchs/fetchName5.js';
import DataFetchingName6 from './coinNameFetchs/fetchName6.js';
import DataFetchingName7 from './coinNameFetchs/fetchName7.js';
import DataFetchingName8 from './coinNameFetchs/fetchName8.js';
import DataFetchingName9 from './coinNameFetchs/fetchName9.js';
import DataFetchingName10 from './coinNameFetchs/fetchName10.js';

function Menu() {

return (
  <div id='div-suprema'>
  
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
                <DataFetchingName/>
                <DataFetchingName2/>
                <DataFetchingName3/>
                <DataFetchingName4/>
                <DataFetchingName5/>
              </div>
              <div className="coin-price spacing-table3">
                <DataFetching />
                <DataFetching2/>
                <DataFetching3/>
                <DataFetching4/>
                <DataFetching5/>
              </div>
              <div className="coin-number spacing-table">
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
              </div>
              <div className="coin-name spacing-table5">
              <DataFetchingName6/>
              <DataFetchingName7/>
              <DataFetchingName8/>
              <DataFetchingName9/>
              <DataFetchingName10/>
              </div>
              <div className="coin-price spacing-table6">
                <DataFetching6 />
                <DataFetching7/>
                <DataFetching8/>
                <DataFetching9/>
                <DataFetching10/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2>Clique aqui para comprar seus Bits</h2>
  </div>
);
  }

export default Menu;
