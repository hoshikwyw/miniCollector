import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const todosFromLocalStorage = JSON.parse(localStorage.getItem("todos"));

    if (todosFromLocalStorage) {
      setTodos(todosFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    setTodos([
      ...todos,
      { id: Date.now(), content: newTodo, completed: false },
    ]);
    setNewTodo("");
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }

        return todo;
      })
    );
  };

  const updateNewTodo = (value) => {
    setNewTodo(value);
  };

  return (
    <div className=" min-h-screen w-[50%] mx-auto bgShadow p-10 my-5">
      <div className=" flex justify-center items-center">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => updateNewTodo(e.target.value)}
          className=" outline-none px-3 py-1 rounded-2xl me-5 w-[70%]"
          placeholder="Add to do list . . ."
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul className=" my-3 w-[95%] mx-auto">
        {todos.map((todo) => ( 
          <li key={todo.id} className=" flex justify-between bg-[#ffffffbd] px-3 py-1 rounded-lg mb-3">
            <div className=" flex gap-3">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className=" text-xl"
              />
              <h2
                className={`${
                  todo.completed ? "line-through text-gray-500" : "no-underline"
                }`}>
                {todo.content}
              </h2>
            </div>
            <button
              className=" text-red-600 font-bold text-xl"
              onClick={() => removeTodo(todo.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
