import { useState } from "react";

function MyForm() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    alert("hello " + user.firstName + " " + user.lastName + " " + user.email);
    event.preventDefault();
  };

  return (
    <>
      <hr />
      <h2>MyForm</h2>
      <form onSubmit={handleSubmit}>
        <label>First name</label>
        <input
          type="text"
          name="firstName"
          onChange={handleChange}
          value={user.firstName}
        />
        <br />
        <label>Last name</label>
        <input
          type="text"
          name="lastName"
          onChange={handleChange}
          value={user.lastName}
        />
        <br />
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={user.email}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default MyForm;
