import React, { useState } from "react";
import "./wallet.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      coins: 0,
      list: [],
    };
    this.sum = 0;
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
  async fetchCoins() {
    return await fetch("https://musicapig.herokuapp.com/coins", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "get",
      })
        .then((response) => response.json())
        .then((data) => {
          data.map((obj) => {
            for (let i = 0; i < this.state.list.buying.length; i++) {
              if (this.state.list.buying[i].fk_coin == obj.name) {
                this.sum += obj.price * this.state.list.buying[i].quantity;
              }
              console.log(this.sum);
            }
          });

          return this.sum;
        });
  }
  render() {
    if (!this.state?.list?.buying) {
      this.callAPI();

      return <span>Loading...</span>
    }

    this.fetchCoins()
        .then((result) => {
          this.setState({coins: result})
        })
        .catch((error) => console.error({error}));

    return <span key={"popopopo"}>{this.state?.coins}</span>;
  }
}

export { Counter };
