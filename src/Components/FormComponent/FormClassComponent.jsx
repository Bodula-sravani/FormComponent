import React, { Component } from "react";

class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNameOfUser: "",
      lastNameOfUser: "",
      emailOfUser: "",
      passwordOfUser: "",
      addressOfUser: "",
      platformOfUser: "",
    };
  }

  firstNameOfUserHandler = (event) => {
    this.setState({ firstNameOfUser: event.target.value });
  };

  lastNameOfUserHandler = (event) => {
    this.setState({ lastNameOfUser: event.target.value });
  };

  emailOfUserHandler = (event) => {
    this.setState({ emailOfUser: event.target.value });
  };

  passwordOfUserHandler = (event) => {
    this.setState({ passwordOfUser: event.target.value });
  };
  addressOfUserHandler = (event) => {
    this.setState({ addressOfUser: event.target.value });
  };

  platformOfUserHandler = (event) => {
    this.setState({ platformOfUser: event.target.value });
  };

  formSubmitHandler = (event) => {
    event.preventDefault();
    console.log(this.state);
    alert(`The data submitted through class component: ${this.state.firstNameOfUser} ${this.state.lastNameOfUser}
    ${this.state.emailOfUser} ${this.state.addressOfUser} ${this.state.passwordOfUser} ${this.state.platformOfUser} `);
  };
  render() {
    const {
      firstNameOfUser,
      lastNameOfUser,
      emailOfUser,
      passwordOfUser,
      addressOfUser,
      platformOfUser,
    } = this.state;
    return (
      <React.Fragment>
        <h1>React Form using Class Component</h1>

        <form onSubmit={this.formSubmitHandler}>
          <label htmlFor="FirstName">First Name</label>
          <input
            type="text"
            value={firstNameOfUser}
            onChange={this.firstNameOfUserHandler}
            required
            id="FirstName"
            name="FirstName"
          />
          <br />
          <label htmlFor="LastName">Last Name</label>
          <input
            type="text"
            value={lastNameOfUser}
            onChange={this.lastNameOfUserHandler}
            required
            id="LastName"
            name="LastName"
          />
          <br />
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            value={emailOfUser}
            onChange={this.emailOfUserHandler}
            required
            id="Email"
            name="Email"
          />
          <br />
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            value={passwordOfUser}
            onChange={this.passwordOfUserHandler}
            required
            id="password"
            name="password"
          />
          <br />
          <label htmlFor="Address">Address</label>
          <textarea
            type="text"
            value={addressOfUser}
            onChange={this.addressOfUserHandler}
            required
            id="Address"
            name="Address"
          />
          <br />
          <label htmlFor="Palstform">Platform</label>
          <select
            value={platformOfUser}
            onChange={this.platformOfUserHandler}
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
}

export default FormComponent;
