import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const Logout = () => {
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
        if (res.status !== 200) {
          throw new Error(res.error);
        }
        history.push("/login");
      })
      .catch((err) => console.log(err));
  }, []);

  return <>Logout</>;
};
