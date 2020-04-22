import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";
import Form from "./components/Form";
import "./App.css";

////////////// styled the container ////
const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  flex-flow: column;
`;
///////////////// url for axios

const url = "https://reqres.in/api/users";

/////////////////set up form/////////////

const initialFormValues = {
  username: "",
  email: "",
  password: "",
  terms: false,
};

const initialFormErrors = {
  username: "",
  email: "",
  password: "",
  terms: false,
};

const formValidation = yup.object().shape({
  username: yup
    .string()
    .min(3, "username must have at least 3 characters!")
    .required("username is required!"),
  email: yup
    .string()
    .email("a VALID email is required")
    .required("email is required"),
  password: yup
    .string()
    .required("password is required"),

});

export default function App() {
  const [users, setUsers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);

  const [formDisabled, setFormDisabled] = useState(true);

  const [formErrors, setFormErrors] = useState(initialFormErrors);

  // const getUsers = () => {
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       setUsers(res.data.data);
  //     })
  //     .catch((err) => {
  //       debugger;
  //     });
  // };

  // useEffect(() => {
  //   getUsers();
  // }, []);
  // console.log(users)

  const postUser = (user) => {
    axios
      .post(url, user)
      .then((res) => {
        setUsers([...users, res.data])
        console.log(res.data);
      })
      .catch((err) => {
        debugger;
      });
  };

useEffect(()=> {

}, [users])

  const changeValues = (event) => {

    const name = event.target.name
    const value = event.target.value
    yup
    .reach(formValidation, name)
    .validate(value)
    .then(valid => {
      setFormErrors({
        ...formErrors,
        [name]: '',
      })
    })
    .catch(err => {
      // dangit, does not validate :(
      // SET THE ERROR IN THE RIGHT PLACE
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0]
      })
    })
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const checkboxChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.checked,
    });
  };

  useEffect(()=>{
    formValidation.isValid(formValues)
    .then(valid => {
      setFormDisabled(!valid)
    })
  }, [formValues])

  const submitUser = (event) => {
    event.preventDefault();

    const newUser = {
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
      terms: formValues.terms,
    };
// console.log(newUser)
    postUser(newUser);
  };

  return (
    <StyledContainer>
      <Form
        values={formValues}
        changeValues={changeValues}
        checkboxChange={checkboxChange}
        submitUser={submitUser}
        disabled={formDisabled}
        errors={formErrors}
      />
      {
        users.map(user=>{
         return( <div className="userCard">
            <h2>{user.username}</h2>
        <p>{user.email}</p>
          </div>)
        })
      }
    </StyledContainer>
  );
}
