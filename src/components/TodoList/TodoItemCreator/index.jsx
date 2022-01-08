import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../../../recoil";

let id = 0;
function getId() {
  return id++;
}

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isCompleted: false,
      },
    ]);
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange}></input>
      <button onClick={addItem}>Add</button>
    </div>
  );
}

export default TodoItemCreator;
