import { useEffect, useState } from "react";

const Contact = () => {
  let name, value;
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const contactUs = async () => {
    try {
      const response = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setUserData(data);
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      if (!data || !response.status === 200) {
        throw new Error("error in contact page");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    contactUs();
  }, []);

  //for message feild logic

  const onHandleInputs = (e) => {
    e.preventDefault();
    name = e.target.name;
    value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };
  const onHandleContactSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = userData;
    try {
      const response = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, message }),
      });
      const data = await response.json();
      if (
        !userData.name ||
        !userData.email ||
        !userData.phone ||
        !userData.message
      ) {
        throw new Error("error in contact message page please fill all feilds");
      }

      setUserData({ ...userData, message: "" });
      alert("message saved succesfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='container'>
        <form className='row g-3' onSubmit={onHandleContactSubmit}>
          <div className='col-md-4'>
            <label className='form-label'>Name</label>
            <input
              type='text'
              className='form-control'
              value={userData.name}
              onChange={onHandleInputs}
              name='name'
            />
          </div>

          <div className='col-md-4'>
            <label className='form-label'>Email</label>
            <div className='input-group'>
              <span className='input-group-text'>@</span>
              <input
                type='email'
                className='form-control'
                value={userData.email}
                onChange={onHandleInputs}
                name='email'
              />
            </div>
          </div>
          <div className='col-md-4'>
            <label className='form-label'>Phone</label>
            <input
              type='number'
              className='form-control'
              value={userData.phone}
              onChange={onHandleInputs}
              name='phone'
            />
          </div>
          <div className='col-md-12 mt-2'>
            <label className='form-label'>Message</label>
            <textarea
              className='form-control'
              value={userData.message}
              onChange={onHandleInputs}
              name='message'
              rows='3'></textarea>
          </div>
          <div className='col-12 mt-3'>
            <button className='btn btn-primary' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
