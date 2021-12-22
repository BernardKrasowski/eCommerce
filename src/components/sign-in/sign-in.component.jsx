import React, { useState } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";

function SignIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmite = (e) => {
    e.preventDefault();
    setUser({ email: "", password: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmite}>
        <FormInput
          type="text"
          name="email"
          value={user.email}
          handleChange={handleChange}
          label="email"
          required
        />

        <FormInput
          type="password"
          name="password"
          label="password"
          value={user.password}
          handleChange={handleChange}
          required
        />

        <input type="submit" value="Submit Form" />
      </form>
    </div>
  );
}

export default SignIn;
