import styled from "styled-components";

export const TodoTitleWrapper = styled.article`
  width: 16rem;
  height: 16rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: #edfdcd;
  border: 5px solid green;
  border-radius: 2rem;
  margin: 2rem 1rem;
  padding: 2rem;

  & header {
    font-size: 1.5rem;
  }
`;

export const InputDataWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const ButtonWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
