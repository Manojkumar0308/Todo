import Form from "./Form";
import TodoItem from "./TodoItem";
import { useState } from "react";
import TodoList from "./TodoList";
import Footer from "./Footer";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totaltodos = todos.length;
  console.log(completedTodos);
  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />

      <Footer completedTodos={completedTodos} totaltodos={totaltodos} />
    </div>
  );
}
