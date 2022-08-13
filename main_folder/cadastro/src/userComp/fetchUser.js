import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

function DataUser() {
  const [userData, SetUserData] = useState("");
  useEffect(() => {
    axios.get("https://musicapig.herokuapp.com///!").then((res) => {
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