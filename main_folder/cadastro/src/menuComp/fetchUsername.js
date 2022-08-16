import { useEffect, useState } from "react";
import React from "react";


function DataUsername() {
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
    });
  }
  );
  
  function fetchUser() {
    return userData;
  }
  return (
    <>
      <h1 className="paragraph">{fetchUser().username}</h1>
    </>
  );
}

export default DataUsername;