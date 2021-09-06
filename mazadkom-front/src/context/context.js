import React, { useState } from "react";
export const UserContext = React.createContext();

function User(props) {
  const [user, setUser] = useState("");
  const [data, setData] = useState("");

  const state = { user, setUser, data, setData };

  return (
    <UserContext.Provider value={state}>{props.children}</UserContext.Provider>
  );
}

export default User;
