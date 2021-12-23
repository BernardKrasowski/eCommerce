import React, { useState } from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.utils.js";

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
      <h2 className="title">I already have an account</h2>
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
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
