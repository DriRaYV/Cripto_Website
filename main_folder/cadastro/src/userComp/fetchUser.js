import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

function DataUser() {
  const [userData, SetUserData] = useState("");
  useEffect(() => {
    axios.post("https://musicapig.herokuapp.com/users/perfil",{
      body:{
        token:sessionStorage.getItem('token')
      }
    }).then((res) => res.json())
    .then((res)=>{
      SetUserData(res)
    })
  });

  function fetchUser() {
    return userData;
  }
  return (
    <>
      <p className="paragraph">{fetchUser().username}</p>
      <p className="paragraph">{fetchUser().cep}</p>
      <p className="paragraph">{fetchUser().user_address}</p>
      <p className="paragraph">{fetchUser().house_number}</p>
      <p className="paragraph">{fetchUser().district}</p>
      <p className="paragraph">{fetchUser().city}</p>
      <p className="paragraph">{fetchUser().uf}</p>
    </>
  );
}

export default DataUser;