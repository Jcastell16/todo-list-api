import React from "react";
import TodoList from "./TodoList.jsx";

const Home = () => {
	return (
		<>
			<div className="container">
				<h1 className="h1">todos</h1>
			</div>
			<TodoList />
		</>
	);
};
export default Home;
