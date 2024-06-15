import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../store/slice/todoSlice";
import { Button } from "@mui/base";

interface TodoItemProps {
	todo: {
		id: number;
		text: string;
		completed: boolean;
	};
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
	const disptach = useDispatch();
	return (
		<div>
			<span
				style={{ textDecoration: todo.completed ? "line-through" : "none" }}
				onClick={() => disptach(toggleTodo(todo.id))}>
				{todo.text}
			</span>
			<Button  onClick={() => disptach(deleteTodo(todo.id))}>Delete</Button>
		</div>
	);
};

export default TodoItem;
