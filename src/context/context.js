import React, { useState } from "react";
export const UserContext = React.createContext();

function User(props) {
  const [user, setUser] = useState("");
  const [value, setValue] = useState("");

  const state = { user, setUser, value, setValue };

  return (
    <UserContext.Provider value={state}>{props.children}</UserContext.Provider>
  );
}

export default User;
