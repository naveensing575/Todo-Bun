import { useState } from "react";
import { useSelector } from "react-redux";
import AddTodo from "./AddTodo";
import DeleteTodo from "./DeleteTodo";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import UpdateTodo from "./UpdateTodo";

const Todo = () => {
  const todos = useSelector((state) => state.todo.todos);
  const [editTodoId, setEditTodoId] = useState(null);

  const handleEditTodo = (id) => {
    setEditTodoId(id);
  };

  const handleCancelEdit = () => {
    setEditTodoId(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Todos</h2>
      <AddTodo />
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between mb-2">
            <span className={`mr-2 ${todo.completed ? 'line-through' : ''}`}>{todo.title}</span>
            <span>{todo.completed ? 'Completed' : 'Not Completed'}</span>
            <div>
              {editTodoId === todo.id ? (
                <>
                  <UpdateTodo todo={todo} />
                  <button onClick={handleCancelEdit}>Cancel</button>
                </>
              ) : (
                <button onClick={() => handleEditTodo(todo.id)} className="flex items-center justify-center">
                  <FaEdit className="text-lg" />
                </button>
              )}
              <DeleteTodo id={todo.id} icon={<FaTrashAlt />} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
