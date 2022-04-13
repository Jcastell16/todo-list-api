import React from "react";
import PropTypes from "prop-types";

const ToDoList = ({ taskToDo, handleDelete }) => {
	return (
		<>
			{taskToDo.map((item, index) => (
				<li
					key={index}
					className="list-group-item"
					onClick={() => handleDelete(index)}>
					{item.label}
				</li>
			))}
			<li className="list-group-item disabled" aria-disabled="true">
				{`${taskToDo.length} item left`}
			</li>
		</>
	);
};

ToDoList.propTypes = {
	TaskToDo: PropTypes.array,
};

export default ToDoList;
