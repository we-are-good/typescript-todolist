import React from "react";
import {
  ButtonWrapper,
  InputDataWrapper,
  TodoTitleWrapper,
} from "../styles/TodoFormStyle";

function TodoForm() {
  return (
    <>
      <TodoTitleWrapper>
        <header>Todo Title</header>
        <InputDataWrapper>
          <div>Todo Content</div>
          <input type="date" />
          <ButtonWrapper>
            <button> 완료 </button>
            <button> 삭제 </button>
          </ButtonWrapper>
        </InputDataWrapper>
      </TodoTitleWrapper>
    </>
  );
}

export default TodoForm;
