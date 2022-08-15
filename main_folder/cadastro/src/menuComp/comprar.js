import "./comprar.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useState } from "react";

function Comprar() {
  const { register, handleSubmit } = useForm();

  const [coin, setCoin] = useState();
  const [amount, setAmount] = useState();

  function getAmount(arr) {
    const amount = `${arr.coin_value}`;
    setAmount(amount);
  }

  function GetData() {
    fetch("https://musicapig.herokuapp.com/wallet/addcoin", {
      method: "POST",
      body: {
        token:sessionStorage.getItem('token'),
        bitname: coin,
        quant: amount,
      },
    })
  }


  function verifyNumber() {
    const num = Number(amount);
    if (num !== isNaN(num) && num >= 0 && coin !== undefined) {
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
        <form onBlur={handleSubmit(getAmount)}>
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
                      <option>Nenhuma</option>
                      <option value={"Bitcoin"}>
                        Bitcoin
                      </option>
                      <option value={"Ethereum"}>
                        Ethereum
                      </option>
                      <option value={"Tether USD"}>
                          Tether USD
                      </option>
                      <option value={"USDC"}>
                        USDC
                      </option>
                      <option value={"Binance Coin"}>
                        Binance Coin
                      </option>
                      <option value={"Binance USD"}>
                        Binance USD
                      </option>
                      <option value={"XRP"}>
                        XRP
                      </option>
                      <option value={"Cardano"}>
                        Cardano
                      </option>
                      <option value={"Solana"}>
                        Solana
                      </option>
                      <option value={"HEX"}>
                        HEX
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
                      placeholder="Ex:0.0024" onBlur={verifyNumber()}
                      required
                    />
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div id="div-button">
            <button type="submit" id="button2">
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
