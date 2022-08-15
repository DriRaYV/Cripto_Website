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
      <p className="paragraph">{fetchUser().name}</p>
      <p className="paragraph">{fetchUser().name}</p>
      <p className="paragraph">{fetchUser().name}</p>
      <p className="paragraph">{fetchUser().name}</p>
      <p className="paragraph">{fetchUser().name}</p>
      <p className="paragraph">{fetchUser().name}</p>
      <p className="paragraph">{fetchUser().name}</p>
    </>
  );
}

export default DataUser;