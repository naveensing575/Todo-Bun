import { useState } from "react";
import { useSelector } from "react-redux";
import AddTodo from "./AddTodo";
import DeleteTodo from "./DeleteTodo";
import { FaEdit, FaTimes } from "react-icons/fa"; // Import FaTimes for cross icon
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

  const truncateTitle = (title) => {
  if (title.length > 50) {
    return title.slice(0, 50) + "...";
  }
  return title;
};

  return (
    <div className="container mx-auto p-4">
      <AddTodo />
      <div className="border border-gray-300 rounded-md p-4">
        <h2 className="text-lg font-bold mb-2 text-center">Task List</h2>
        <table className="w-full">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200 text-gray-700 font-bold">Title</th>
              <th className="py-2 px-4 bg-gray-200 text-gray-700 font-bold">Status</th>
              <th className="py-2 px-4 bg-gray-200 text-gray-700 font-bold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {todos?.map((todo) => (
              <tr key={todo.id} className="border-b border-gray-300 text-center">
                <td className={`py-2 px-4 ${todo.completed ? 'line-through' : ''}`}>
                  {truncateTitle(todo.title)}
                </td>
                <td className="py-2 px-4">{todo.completed ? 'Completed' : 'Not Completed'}</td>
                <td className="py-2 px-4">
                  <div className="flex space-x-4 justify-center">
                    {editTodoId === todo.id ? (
                      <>
                        <UpdateTodo todo={todo} />
                        <button onClick={handleCancelEdit} className="px-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400">
                          <FaTimes className="text-lg" />
                        </button>
                      </>
                    ) : (
                      <button onClick={() => handleEditTodo(todo.id)} className="px-2 py-1 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400">
                        <FaEdit className="text-lg" />
                      </button>
                    )}
                    <DeleteTodo id={todo.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Todo;
