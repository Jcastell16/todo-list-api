import React from "react";
import PropTypes from "prop-types";

const InputTask = ({
	taskVar,
	handleChangeTask,
	handleAddTask,
	handleEvent,
}) => {
	return (
		<li className="list-group-item">
			<input
				className="form-control-lg border-0"
				type="text"
				placeholder="What needs to be done?"
				name="label"
				value={taskVar.label}
				onChange={handleChangeTask}
				onKeyUp={handleAddTask}
				onKeyDown={handleEvent}
			/>
		</li>
	);
};

InputTask.propTypes = {
	taskVar: PropTypes.object,
	handleChangeTask: PropTypes.func,
	handleAddTask: PropTypes.func,
};

export default InputTask;
