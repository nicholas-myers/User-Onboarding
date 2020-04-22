import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  border: 1px solid black;
  display: flex;
  flex-flow: column;
  width: 50%;
  padding: 5%;
`;

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
        <p>
            {errors.username}
        </p>
        <p>
            {errors.email}
        </p>
        <p>
            {errors.password}
        </p>
      </div>
      <label>User Name</label>
      <input
        name="username"
        value={values.username}
        onChange={changeValues}
      ></input>
      <label>Email</label>
      <input name="email" value={values.email} onChange={changeValues}></input>
      <label>Password</label>
      <input
        name="password"
        value={values.password}
        onChange={changeValues}
      ></input>
      <label>Terms of Service</label>
      <input
        type="checkbox"
        name="terms"
        value={values.terms}
        onChange={checkboxChange}
      ></input>
      <button onClick={submitUser} disabled={disabled}>
        Submit
      </button>
    </StyledForm>
  );
}
