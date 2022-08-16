import React from "react";
import "./wallet.css";

class counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.callAPI = this.callAPI.bind(this);
  }
  callAPI() {
    fetch("https://musicapig.herokuapp.com/wallet", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify({
        token: sessionStorage.getItem("token"),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          list: data,
        });
      });
  }

  callCoins() {
    fetch("https://musicapig.herokuapp.com/coins", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "get",
    })
      .then((response) => response.json())
      .then((data) => {
        const sum = 0;
        for (let i = 0; i < this.state.list.buying.length; i++) {
          for (let k = 0; k < data.length; i++) {
            if (data[k].name == this.state.list.buying[0].fk_coin) {
              sum += data.price;
            }
          }
        }
        return sum
      });
  }
}

export { counter };
