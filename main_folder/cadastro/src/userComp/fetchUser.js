import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

function DataUser() {
  const token = sessionStorage.getItem('token')
  const axiosConfig = {
    headers: {
      'Content-Type': 'application/json'
    },
  }
  const [userData, SetUserData] = useState("");
  useEffect(() => {
    axios.post("https://musicapig.herokuapp.com/users/perfil",{token:token},axiosConfig).then((res) => {
      const resp = res.data;
      SetUserData(resp);
    });
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