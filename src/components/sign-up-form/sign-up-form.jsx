import { useState } from "react";
import {
  createAuthUserWithEmailAndPass,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase";
import FormInput from "../form-input/form-input";
import "./sign-up-form.scss";
import Button from "../button/button";

const defaultFormFields = {
  name: "",
  email: "",
  password: "",
  confirmPass: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, email, password, confirmPass } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPass) {
      alert("password do not match");
      return;
    }

    try {
      const response = await createAuthUserWithEmailAndPass(email, password);
      const userDocRef = await createUserDocFromAuth(response.user, {
        displayName: name,
      });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user,email already in use");
      } else {
        console.log("Error at creating user ", error.message);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={(e) => handleChange(e)}
          name="name"
          value={name}
        ></FormInput>

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={(e) => handleChange(e)}
          name="confirmPass"
          value={confirmPass}
        ></FormInput>

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
