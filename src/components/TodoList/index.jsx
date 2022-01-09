import React from "react";
import { useRecoilValue } from "recoil";
import TodoItemCreator  from "./TodoItemCreator";
import TodoListStats  from "./TodoListStats";
import TodoListFilters  from "./TodoListFilters";
import TodoItem  from "./TodoItem";
import { filteredTodoListState } from "../../recoil";


function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}

export default TodoList;
