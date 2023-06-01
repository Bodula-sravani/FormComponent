import React, { useState } from "react";

function FormFunctionCOmponent() {
  const [firstNameOfUser, setFirstNameOfUser] = useState(" ");
  const [lastNameOfUser, setLastNameOfUser] = useState(" ");
  const [emailOfUser, setEmailOfUser] = useState(" ");
  const [passwordOfUser, setPasswordOfUser] = useState("");
  const [addressOfUser, setAddressOfUser] = useState(" ");
  const [platformOfUser, setPlatformOfUser] = useState(" ");

  const firstNameOfUserHandler = (event) => {
    setFirstNameOfUser(event.target.value);
  };
  const lastNameOfUserHandler = (event) => {
    setLastNameOfUser(event.target.value);
  };
  const emailOfUserHandler = (event) => {
    setEmailOfUser(event.target.value);
  };
  const passwordOfUserHandler = (event) => {
    setPasswordOfUser(event.target.value);
  };
  const addressOfUserHandler = (event) => {
    setAddressOfUser(event.target.value);
  };
  const platformOfUserHandler = (event) => {
    setPlatformOfUser(event.target.value);
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    alert(
      "The data submitted through function: " +
        firstNameOfUser +
        " " +
        lastNameOfUser +
        " " +
        emailOfUser +
        " " +
        passwordOfUser +
        " " +
        addressOfUser +
        " " +
        platformOfUser
    );
  };

  return (
    <React.Fragment>
      <h1>React Form using function Component</h1>

      <form onSubmit={formSubmitHandler}>
        <label htmlFor="FirstName">First Name</label>
        <input
          type="text"
          value={firstNameOfUser}
          onChange={firstNameOfUserHandler}
          required
          id="FirstName"
          name="FirstName"
        />
        <br />
        <label htmlFor="LastName">Last Name</label>
        <input
          type="text"
          value={lastNameOfUser}
          onChange={lastNameOfUserHandler}
          required
          id="LastName"
          name="LastName"
        />
        <br />
        <label htmlFor="Email">Email</label>
        <input
          type="email"
          value={emailOfUser}
          onChange={emailOfUserHandler}
          required
          id="Email"
          name="Email"
        />
        <br />
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          value={passwordOfUser}
          onChange={passwordOfUserHandler}
          required
          id="password"
          name="password"
        />
        <br />
        <label htmlFor="Address">Address</label>
        <textarea
          type="text"
          value={addressOfUser}
          onChange={addressOfUserHandler}
          required
          id="Address"
          name="Address"
        />
        <br />
        <label htmlFor="Platform">Platform</label>
        <select
          value={platformOfUser}
          onChange={platformOfUserHandler}
          required
        >
          <option value="Windows">Windows</option>
          <option value="Mac">Mac</option>
          <option value="Android">Android</option>
          <option value="Linux">Linux</option>
        </select>
        <br />
        <button type="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

export default FormFunctionCOmponent;
