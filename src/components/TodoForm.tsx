import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../store/slice/todoSlice";
import { TextField } from "@mui/material";
import { Button } from "@mui/base";
import TodoItem from "./TodoItem";
import { RootState } from "../store/store";
const TodoForm: React.FC = () => {
	const { todos } = useSelector((state: RootState) => state.todos);
	const dispatch = useDispatch();
	const [text, setText] = useState("");

	const handleAddTodo = () => {
		if (text.trim().length > 0) {
			dispatch(addTodo(text));
			setText("");
		}
	};

	return (
		<div>
			<h1>Todo List </h1>
			<TextField
				label="text"
				type="text"
				value={text}
				onChange={(e) => setText(e.target.value)}
			/>
			<Button onClick={handleAddTodo}>Add</Button>
			<div>
				{todos.map((todo: any) => (
					<TodoItem key={todo.id} todo={todo} />
				))}
			</div>
		</div>
	);
};

export default TodoForm;
