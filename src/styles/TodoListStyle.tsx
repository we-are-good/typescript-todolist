import styled from "styled-components";

export const TodoTitle = styled.div`
  font-size: 1.2rem;
  text-align: center;
  border: none;
  background-color: transparent;
`;

export const TodoContent = styled.div`
  height: 5rem;
  font-size: 1rem;
  text-align: center;
  border: none;
  background-color: transparent;
  resize: none;
`;

export const IsDoneWrapper = styled.div`
  height: 2rem;
  background-color: #a2ffd5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 40px;
  font-weight: 800;
  width: 600px;
`;
