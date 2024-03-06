import PropTypes from 'prop-types';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../features/todo/todoSlice";

const UpdateTodo = ({ todo }) => {
  const [title, setTitle] = useState(todo.title);
  const [completed, setCompleted] = useState(todo.completed);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ id: todo.id, title, completed }));
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center justify-between">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow mr-2 text-black"
      />
      <div className="flex items-center">
        <label htmlFor="completed" className="mr-2">Completed:</label>
        <input
          type="checkbox"
          id="completed"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
          className="h-6 w-6 text-yellow-500 focus:ring-yellow-400 border-gray-300 rounded-md"
        />
      </div>
      <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500">Update Todo</button>
    </form>
  );
};

UpdateTodo.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default UpdateTodo;
