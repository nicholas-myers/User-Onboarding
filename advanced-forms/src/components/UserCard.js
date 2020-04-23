import React from "react";
import styled from "styled-components";

const StyledUser = styled.div`
  border: 1px solid black;
  border-radius: 1rem;
  margin: 5% 0;
  background-color: dodgerblue;
  padding: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  color: white;
`;

export default function UserCard({ user }) {
  return (
    <StyledUser>
      <h2>{user.username}</h2>
      <p>{user.email}</p>
    </StyledUser>
  );
}
