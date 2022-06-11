import React, { useState } from "react";
import { InputBase, InputLabelBase } from '../../../Atoms/Inputs/InputBase'
import { InputDiv } from './Auth.styles.js'
import { Form } from '../Form.styles.js'
import ButtonBase from '../../../Atoms/Buttons/ButtonBase.js';
import axios from 'axios';

function SignupFormBase(props) {

  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
    email: '',
  })

  const { setSignedup, setSuccessMsg, setErrMsg, errMsg } = props;

  function handleSubmit(e) {
    e.preventDefault();
    const userObj = {
      firstName: inputs.firstName,
      lastName: inputs.lastName,
      password: inputs.password,
      email: inputs.email
    }
    axios.post('http://localhost:9000/api/auth/register', userObj)
      .then(res => {
        setSignedup(true);
        setSuccessMsg(res.data.message);
        console.log(res);
      })
      .catch(function (error) {
        const { password } = error.response.data.error
        setErrMsg({
          passwordErr: password
        })
        console.log(password)
      })
  }

  return (
    <Form
      width="400px"
      id="signup"
      onSubmit={(e) => handleSubmit(e)}
      alignment="end"
    >
      <InputDiv direction="vertical">
        <InputLabelBase forLabel="firstName">First name*</InputLabelBase>
        <InputBase
          type="text"
          id="firstName"
          name="firstName"
          direction="vertical"
          placeholder="First name"
          value={inputs.firstName}
          inputs={inputs}
          setInputs={setInputs}
          required
        />
      </InputDiv>
      <InputDiv direction="vertical">
        <InputLabelBase forLabel="lastName">Last name*</InputLabelBase>
        <InputBase
          type="text"
          id="lastName"
          name="lastName"
          direction="vertical"
          placeholder="Last name"
          value={inputs.lastName}
          inputs={inputs}
          setInputs={setInputs}
          required
        />
      </InputDiv>
      <InputDiv direction="vertical">
        <InputLabelBase forLabel="lastName">Email address*</InputLabelBase>
        <InputBase
          type="email"
          id="email"
          name="email"
          direction="vertical"
          placeholder="Email"
          value={inputs.email}
          inputs={inputs}
          setInputs={setInputs}
          required
        />
      </InputDiv>
      <InputDiv direction="vertical">
        <InputLabelBase forLabel="password">Create a password*</InputLabelBase>
        <InputBase
          type="password"
          id="password"
          name="password"
          direction="vertical"
          placeholder="Password"
          minLength="6"
          value={inputs.password}
          inputs={inputs}
          setInputs={setInputs}
          required
        />
      </InputDiv>
      <InputDiv direction="vertical">
        <InputLabelBase forLabel="confirm_password">Confirm password*</InputLabelBase>
        <InputBase
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          minlength="6"
          direction="vertical"
          placeholder="Confirm Password"
          value={inputs.confirmPassword}
          inputs={inputs}
          setInputs={setInputs}
          required
        />
      </InputDiv>
      <ButtonBase
        id="signup"
        size="medium"
        type="primary"
        width="200px"
      >Create an account</ButtonBase>
    </Form>
  );
}

export default SignupFormBase;