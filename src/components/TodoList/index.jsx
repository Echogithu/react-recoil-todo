import React from "react";
import { useRecoilValue } from "recoil";
import TodoItemCreator  from "./TodoItemCreator";
import TodoItem  from "./TodoItem";
import { todoListState } from "../../recoil";


function TodoList() {
  const todoList = useRecoilValue(todoListState);
  return (
    <>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default TodoList;
