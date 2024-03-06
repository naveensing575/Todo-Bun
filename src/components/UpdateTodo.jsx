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
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow"
      />
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
          className="mr-2"
        />
        Completed
      </label>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Update Todo</button>
    </form>
  );
};

UpdateTodo.propTypes = {
  todo: PropTypes.object.isRequired,
};

export default UpdateTodo;
