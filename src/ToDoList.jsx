import React, { useState } from "react";

function ToDoList() {
	const [tasks, setTasks] = useState([]);
	const [newTask, setNewTask] = useState("");

	function handleInputChange(event) {
		setNewTask(event.target.value);
	}

	function addTask() {
		if (newTask.trim() !== "") {
			setTasks((t) => [...t, newTask]);
			setNewTask("");
		}
	}

	function deleteTask(index) {
		const updatedTask = tasks.filter((_, i) => i !== index);
		setTasks(updatedTask);
	}

	function moveTaskUp(index) {
		if (index > 0) {
			const updatedTask = [...tasks];
			[updatedTask[index], updatedTask[index - 1]] = [
				updatedTask[index - 1],
				updatedTask[index],
			];
			setTasks(updatedTask);
		}
	}

	function moveTaskDown(index) {
		if (index < tasks.length - 1) {
			const updatedTask = [...tasks];
			[updatedTask[index], updatedTask[index + 1]] = [
				updatedTask[index + 1],
				updatedTask[index],
			];
			setTasks(updatedTask);
		}
	}

	return (
		<div className="font-sans text-center mt-24">
			<h1 className="text-6xl font-bold text-white mb-8">To-Do-List</h1>
			<div>
				<input
					className="text-2xl p-2.5 border-2 rounded-md text-gray-500"
					type="text"
					placeholder="Enter a task..."
					value={newTask}
					onChange={handleInputChange}
				/>
				<button
					className="custom-button text-2xl bg-green-600 hover:bg-green-800 ml-2"
					onClick={addTask}
				>
					Add
				</button>
			</div>
			<ol className="mt-8">
				{tasks.map((task, index) => (
					<li
						className="text-3xl font-bold p-3.5 bg-gray-200 mb-2.5 border-2 border-gray-400 rounded-lg flex items-center"
						key={index}
					>
						<span className="grow shrink basis-0">{task}</span>
						<button
							className="custom-button text-xl bg-red-500 hover:bg-red-700 px-3 py-2"
							onClick={() => deleteTask(index)}
						>
							Delete
						</button>
						<button
							className="custom-button text-xl bg-blue-500 hover:bg-blue-700 ml-2.5"
							onClick={() => moveTaskUp(index)}
						>
							☝
						</button>
						<button
							className="custom-button text-xl bg-blue-500 hover:bg-blue-700 ml-2.5"
							onClick={() => moveTaskDown(index)}
						>
							👇
						</button>
					</li>
				))}
			</ol>
		</div>
	);
}

export default ToDoList;
