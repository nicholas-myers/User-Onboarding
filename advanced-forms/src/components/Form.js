import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  border: 1px solid black;
  border-radius: 1rem;
  display: flex;
  flex-flow: column;
  width: 80%;
  padding: 5%;
  box-shadow: 0 0 1rem .5rem gray;
  background-color: lightblue;
`;

const Warning = styled.p`
    width: 100%;
    font-size: 1.5rem;
    color: red;
    box-shadow: none;
    margin: 1% 0;

`

const StyledLabel =styled.label`

    /* color: white; */

`

export default function Form({
  values,
  changeValues,
  checkboxChange,
  submitUser,
  disabled,
  errors,
}) {
  return (
    <StyledForm onSubmit={submitUser}>
      <div className="errors">
        <Warning>
            {errors.username}
        </Warning>
        <Warning>
            {errors.email}
        </Warning>
        <Warning>
            {errors.password}
        </Warning>
        <Warning>
            {errors.terms}
        </Warning>
      </div>
      <StyledLabel>User Name</StyledLabel>
      <input
        name="username"
        value={values.username}
        onChange={changeValues}
      ></input>
      <StyledLabel>Email</StyledLabel>
      <input name="email" value={values.email} onChange={changeValues}></input>
      <StyledLabel>Password</StyledLabel>
      <input
        name="password"
        type="password"
        value={values.password}
        onChange={changeValues}
      ></input>
      <StyledLabel>Terms of Service</StyledLabel>
      <input
        type="checkbox"
        name="terms"
        onChange={checkboxChange}
      ></input>
      <button onClick={submitUser} disabled={disabled}>
        Submit
      </button>
    </StyledForm>
  );
}
