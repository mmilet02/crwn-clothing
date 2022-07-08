import { useState } from "react";

import {
  signInWithGooglePopup,
  signInAuthWithEmailAndPass,
} from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input";
import Button from "../button/button";

import "./sign-in-form.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInAuthWithEmailAndPass(email, password);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        alert("No user associated with this email.");
      } else if (error.code === "auth/wrong-password") {
        alert("Incorrect password for email.");
      } else {
        console.log("Error at login user ", error.message);
        alert("Error at login.");
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <FormInput
          label="Email"
          type="email"
          required
          onChange={(e) => handleChange(e)}
          name="email"
          value={email}
        ></FormInput>

        <FormInput
          label="Password"
          type="password"
          required
          onChange={(e) => handleChange(e)}
          name="password"
          value={password}
        ></FormInput>

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button tyoe="button" buttonType="google" onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
