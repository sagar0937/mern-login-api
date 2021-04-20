import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();

  const callbackAbout = async () => {
    try {
      const response = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      console.log(data);
      if (!data || !response.status === 200) {
        throw new Error("no User Login");
      }
    } catch (error) {
      console.log(error);
      history.push("/login");
    }
  };
  useEffect(() => {
    callbackAbout();
  }, []);

  return (
    <>
      <>About</>
    </>
  );
};

export default About;
