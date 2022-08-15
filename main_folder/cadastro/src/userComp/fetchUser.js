import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

function DataUser() {
  const token = sessionStorage.getItem('token')

  const [userData, SetUserData] = useState("");
  useEffect(() => {

    fetch("https://musicapig.herokuapp.com/users/perfil", {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
      "token":token
      }),
    }).then(res => res.json())
    .then((response) => {
      let res = response.userInfo[0]
      SetUserData(res)
      console.log(res)
    });
  }
  );
  
  function fetchUser() {
    return userData;
  }
  return (
    <>
      <p className="paragraph">{fetchUser().username}</p>
      <p className="paragraph">{fetchUser().user_address}</p>
      <p className="paragraph">{fetchUser().cep}</p>
      <p className="paragraph">{fetchUser().house_number}</p>
      <p className="paragraph">{fetchUser().district}</p>
      <p className="paragraph">{fetchUser().city}</p>
      <p className="paragraph">{fetchUser().uf}</p>
    </>
  );
}

export default DataUser;