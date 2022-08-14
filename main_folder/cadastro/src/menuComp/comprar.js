import "./comprar.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";
import DataFetchingName from "./coinNameFetchs/fetchName1.js";
import DataFetchingName2 from "./coinNameFetchs/fetchName2.js";
import DataFetchingName3 from "./coinNameFetchs/fetchName3.js";
import DataFetchingName4 from "./coinNameFetchs/fetchName4.js";
import DataFetchingName5 from "./coinNameFetchs/fetchName5.js";
import DataFetchingName6 from "./coinNameFetchs/fetchName6.js";
import DataFetchingName7 from "./coinNameFetchs/fetchName7.js";
import DataFetchingName8 from "./coinNameFetchs/fetchName8.js";
import DataFetchingName9 from "./coinNameFetchs/fetchName9.js";
import DataFetchingName10 from "./coinNameFetchs/fetchName10.js";

function Comprar() {
  const { register, handleSubmit } = useForm();

  const [coin, setCoin] = useState();
  const [amount, setAmount] = useState();

  function getAmount(arr) {
    const amount = `${arr.coin_value}`;
    setAmount(amount);
    verifyNumber()
  }

  function GetData() {
    sessionStorage.setItem('token', 'popopoipppipi')
    let body = JSON.stringify({
      token:"eyJhbGciOiJIUzI1NiJ9.Z2F0bw.KO4xSFO5eOyvYMj0f3iuPAPEY5fnU9NtXoba_piTiPs",
      fk_coin: "oioi  ",
      quantity: amount,
    })
    console.log(body);
    alert('ana  ')
    fetch("https://musicapig.herokuapp.com/wallet/addcoin", {
      method: "POST",
      body: body,
    });
  }

  function verifyNumber() {
    const num = Number(amount);
    if (num !== isNaN(num) && num >= 0) {
      GetData()
    }
    else if(num <= 0){  
      alert('insira um número maior que 0')
    }
  }

  return(
    <div id="fundo-escuro">
      <div id="fundo-claro">
        <h1 id="title">
          Vamos Comprar?
          <br />
          <br />
        </h1>
        <form >
          <div id="information2">
            <div id="information3">
              <div className="label-div">
                <label>
                  Selecione a opção de compra
                  <div className="input-div">
                    <select
                      name="coin"
                      value={coin}
                      onChange={(coin) => setCoin(coin.target.value)}
                      required
                    >
                      <option value={"Bitcoin"}>
                        {//<DataFetchingName />
 }                     </option>
                      <option value={"Ethereum"}>
                        {//<DataFetchingName2 />
}                      </option>
                      <option value={"Tether USD"}>
                        {//<DataFetchingName3 />
}                      </option>
                      <option value={"USDC"}>
                        {//<DataFetchingName4 />
}                      </option>
                      <option value={"Binance Coin"}>
                        {//<DataFetchingName5 />
}                      </option>
                      <option value={"Binance USD"}>
                        {//<DataFetchingName6 />
}                      </option>
                      <option value={"XRP"}>
                        {//<DataFetchingName7 />
}                      </option>
                      <option value={"Cardano"}>
                        {//<DataFetchingName8 />
}                      </option>
                      <option value={"Solana"}>
                        {//<DataFetchingName9 />
}                      </option>
                      <option value={"HEX"}>
                        {//<DataFetchingName10 />
                        }
                      </option>
                    </select>
                  </div>
                </label>
                <br />
                <label>
                  Quantidade
                  <div className="input-div">
                    <input
                      type="number"
                      className="inputValue"
                      {...register("coin_value")}
                      placeholder="Ex:0.0024"
                      required
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div id="div-button">
            <button type="submit" id="button2" onClick={handleSubmit(getAmount)}>
              Comprar
            </button>
          </div>
          <h3>
            Acessar Minha<Link to="/carteira">Carteira</Link>
          </h3>
        </form>
      </div>
    </div>
)
}

export default Comprar;
