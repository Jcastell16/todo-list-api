import React, { useState, useEffect } from "react";
import InputTask from "./InputTask.jsx";
import ToDoList from "./ToDoList.jsx";

const URL_BASE = "https://assets.breatheco.de/apis/fake/todos/user";

const Home = () => {
	let initialState = {
		label: "",
		done: false,
	};

	const [taskToDo, setTaskToDo] = useState([]);
	const [taskVar, setTaskVar] = useState(initialState);
	const [error, setError] = useState(false);

	const handleChangeTask = (event) => {
		setTaskVar({ ...taskVar, [event.target.name]: event.target.value });
	};

	const handleEvent = (event) => {
		if (event.key === "Enter") {
			event.preventDefault();
		} else {
		}
	};

	//PUT
	const handleAddTask = async (event) => {
		try {
			if (event.key === "Enter") {
				let response = await fetch(`${URL_BASE}/jcastell16`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},

					body: JSON.stringify([...taskToDo, taskVar]),
				});
				if (response.ok) {
					getToDos();
					setError(false);
					setTaskVar(initialState);
				} else {
					console.log(response.status);
				}
			} else {
				setError(true);
				return;
			}
		} catch {
			console.log(error);
		}
	};

	// PUT Borrar
	const handleDelete = async (id) => {
		let newTasks = taskToDo.filter((item, index) => index != id);
		try {
			let response = await fetch(`${URL_BASE}/jcastell16`, {
				method: "PUT",
				headers: {
					"Content-Type": "application/json",
				},

				body: JSON.stringify(newTasks),
			});
			let result = await response.json();
			if (response.ok) {
				setTaskVar({ label: "", done: false });
				getToDos();
			} else {
				return;
			}
		} catch {
			console.log(error);
		}
	};

	// GET

	const getToDos = async () => {
		try {
			let response = await fetch(`${URL_BASE}/jcastell16`);
			let data = await response.json();
			if (response.ok) {
				setTaskToDo(data);
			} else {
				addTasks();
			}
		} catch (error) {
			console.log(error);
		}
	};

	//POST

	const addTasks = async () => {
		try {
			let response = await fetch(`${URL_BASE}/jcastell16`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},

				body: JSON.stringify([]),
			});
			if (response.ok) {
				getToDos();
			} else {
				alert(`Fail!! ${response.statusText}`);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getToDos();
	}, []);

	return (
		<>
			<div className="container">
				<div>
					<h1 className="h1">todos</h1>
				</div>
				<div className="container col-6">
					<ul>
						<InputTask
							taskVar={taskVar}
							handleChangeTask={handleChangeTask}
							handleAddTask={handleAddTask}
							handleEvent={handleEvent}
						/>
						<ToDoList
							taskToDo={taskToDo}
							handleDelete={handleDelete}
						/>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Home;
