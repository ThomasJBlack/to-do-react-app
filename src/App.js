import { useState } from "react";
import "./App.css";
import plotData from "./defaultTasks.js";

const DATA = plotData;

export function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>The Mandalorian Plot/Tasks</h1>
			</header>
			<Main />
		</div>
	);
}

function Main() {
	console.log("hi");
	const episodeNames = Object.keys(DATA);
	return (
		<div className="main-content">
			{episodeNames.map((eName) => {
				return <Episode episodeName={eName} initialDataArr={DATA[eName]} />;
			})}
		</div>
	);
}

function Episode(props) {
	console.log("hi2");
	const { episodeName, initialDataArr } = props;
	const [tasksState, setTasksState] = useState(props);
	const [newTask, setNewTask] = useState();
	const [inputText, setInputText] = useState("");

	return (
		<div className="episode">
			<div
				className="toggle"
				onClick={() => {
					// setTasksState(!tasksState); // toggles episode task list
					// setNewTask(newTask); // hides new task input area when episode is toggled
				}}
			>
				{episodeName}
			</div>

			{tasksState && (
				<ul>
					{initialDataArr.map((taskText) => {
						return <Task key={taskText} taskText={taskText} tasksState={tasksState} setTasksState={setTasksState} />;
					})}
					<button
						className="add-task"
						onClick={() => {
							setNewTask(true);
						}}
					>
						Add Task
					</button>
				</ul>
			)}
			{newTask && (
				<>
					{/* <NewTask tasksState={tasksState} setTasksState={setTasksState} />; */}
					<input value={inputText} onChange={(event) => setInputText(event.target.value)} />
					<button
						className="add-new-task"
						onClick={() => {
							setTasksState([...tasksState, inputText]);
						}}
					>
						Add New Task
					</button>
				</>
			)}
		</div>
	);
}

function Task(props) {
	const { taskText, tasksState, setTasksState, index } = props;

	const removeTask = () => {
		setTasksState(tasksState);
	};

	return (
		<>
			{tasksState && (
				<li>
					{taskText}
					{console.log(tasksState)}
					<button onClick={() => removeTask(tasksState[index])}>Delete</button>
				</li>
			)}
		</>
	);
}
