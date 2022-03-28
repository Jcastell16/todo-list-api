import React, { useState } from "react";
import Count from "./Count.jsx";

const TodoList = () => {
	const [toDo, setToDo] = useState([]);

	const newDo = (event) => {
		if (event.key === "Enter" && event.target.value === "") {
			alert("Blank inputs not allowed");
		} else if (event.key === "Enter") {
			event.preventDefault();
			setToDo(toDo.concat(event.target.value));
			event.target.value = "";
		}
	};

	const removeDo = (toRemove) => {
		const updatedArray = toDo.filter((item, index) => index !== toRemove);
		setToDo(updatedArray);
	};

	return (
		<div className="container col-6">
			<ul>
				<li className="list-group-item">
					<input
						className="form-control-lg border-0"
						type="text"
						placeholder="What needs to be done?"
						onKeyDown={newDo}
					/>
				</li>
				{toDo.map((doItem, index) => (
					<li
						key={index}
						className="list-group-item d-flex justify-content-between align-items-center px-4 fs-4 text-secondary">
						{doItem}
						<i
							className="fas fa-times-circle pl-5 text-danger"
							onClick={() => removeDo(index)}></i>
					</li>
				))}
				<li className="list-group-item disabled" aria-disabled="true">
					<Count items={toDo.length} />
				</li>
			</ul>
		</div>
	);
};
export default TodoList;
