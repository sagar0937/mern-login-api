import { useEffect, useState } from "react";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [showName, setShowName] = useState(false);

  const homeName = async () => {
    try {
      const response = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data) {
        setShowName(true);
        setUserName(data.name);
      }

      if (!data || !response.status === 200) {
        throw new Error("error in contact page");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    homeName();
  }, []);
  return (
    <>
      <div className='d-flex p-2 align-items-center justify-content-center '>
        <h2>Welcome----</h2>
        <h2>{userName}</h2>
        <br />
        <h3>
          {showName ? ` Happy to see you back...` : "We are MERN developer"}
        </h3>
      </div>
    </>
  );
};

export default Home;
