import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { userContext } from "../App";

export const Logout = () => {
  //use context
  const { state, dispatch } = useContext(userContext);

  let history = useHistory();
  //useeffect
  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
        dispatch({ type: "USER", payload: false });
        if (res.status !== 200) {
          throw new Error(res.error);
        }

        history.push("/login");
      })
      .catch((err) => console.log(err));
  }, []);

  return <>Logout</>;
};
