import styled from "styled-components";

export const TodoTitleWrapper = styled.article`
  width: 16rem;
  height: 16rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background-color: #edfdcd;
  border: 5px solid green;
  border-radius: 2rem;
  margin: 2rem 1rem;
  padding: 2rem;
`;

export const TodoTitleInput = styled.input`
  font-size: 1.2rem;
  text-align: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const InputDataWrapper = styled.main`
  height: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

export const TodoContentTextarea = styled.textarea`
  height: 5rem;
  font-size: 1rem;
  text-align: center;
  border: none;
  background-color: transparent;
  resize: none;
  cursor: pointer;
`;

export const ButtonWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  & button {
    width: 4rem;
    height: 1%.5;
    background-color: #beffaf;
    border-radius: 8px;
  }
`;
