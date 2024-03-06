import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";

const DeleteTodo = ({ id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo({ id }));
  };

  return (
    <button onClick={handleDelete} className="delete-button bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500">Delete</button>
  );
};

DeleteTodo.propTypes = {
  id: PropTypes.number.isRequired,
};

export default DeleteTodo;
