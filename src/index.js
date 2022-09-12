import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { useState } from "react";

const htmlContainer = document.getElementById("root");
const root = ReactDOM.createRoot(htmlContainer);

function StudentApp() {
	const [studentList, setStudentList] = useState([
		{
			firstName: "Misty",
			lastName: "Knight",
			sId: "234",
			school: "Queens College",
			major: "Law",
		},
		{
			firstName: "Jessica",
			lastName: "Jones",
			sId: "434",
			school: "Brooklyn College",
			major: "CS",
		},
	]);

	function StudentInfo(props) {
		return (
			<div>
				<div>
					{props.lastName}, {props.firstName}
				</div>
				<ul>
					<li>
						<strong>ID:</strong> {props.sId}
					</li>
					<li>
						<strong>School:</strong> {props.school}
					</li>
					<li>
						<strong>Major:</strong> {props.major}
					</li>
				</ul>
			</div>
		);
	}

	function ClassList() {
		return (
			<div>
				<h1 className="red-text">Welcome to CTP</h1>
				<p>List of Students</p>
				{studentList.map((student) => (
					<StudentInfo {...student} key={student.sId} />
				))}
			</div>
		);
	}

	/*
	function CountApp() {
		const [numClicks, setNumClicks] = useState(0);
	
		const handleClick = (event) => {
			setNumClicks(numClicks + 1);
		};
	
		return (
			<div>
				<p>The button has been clicked {numClicks} times</p>
				<button onClick={handleClick}>Click this button</button>
			</div>
		);
	}
	*/

	function AddStudent(UpdatedStudent) {
		
		setStudentList((prevStudentList) => [
			...prevStudentList,
			{ ...UpdatedStudent },
		]);
		
	}

	function StudentForm() {
		const [firstName, setFirstName] = useState("");
		const [lastName, setLastName] = useState("");
		const [id, setId] = useState('');
		const [school, setSchool] = useState("");
		const [major, setMajor] = useState("");
		const handleSubmit = event => {
			event.preventDefault(); // 👈️ prevent page refresh
			let update = {
				firstName: firstName,
				lastName: lastName,
				sId: id,
				school: school,
				major: major,
			};
			AddStudent(update);
			setFirstName('');
			setLastName('');
			setId('');
			setSchool('');
			setMajor('');
		};
		return (
			<div>
				<fieldset>
					<form onSubmit={handleSubmit}
					>
						<label>
							First Name:{" "}
							<input
								id="first-name"
								type="text"
								onChange={(event) => setFirstName(event.target.value)}
								value={firstName}
								required
							/>
						</label>
						<label>
							Last Name:{" "}
							<input
								id="last-name"
								type="text"
								onChange={(event) => setLastName(event.target.value)}
								value={lastName}
								required
							/>
						</label>
						<label>
							Student ID:{" "}
							<input
								id="id"
								type="text"
								onChange={(event) => setId(event.target.value)}
								value={id}
								required
							/>
						</label>
						<label>
							School:{" "}
							<input
								id="school"
								type="text"
								onChange={(event) => setSchool(event.target.value)}
								value={school}
								required
							/>
						</label>
						<label>
							Major:{" "}
							<input
								id="major"
								type="text"
								onChange={(event) => setMajor(event.target.value)}
								value={major}
								required
							/>
						</label>

						<input
							type="submit"
							value="Add Student"
							
						/>
					</form>
				</fieldset>
			</div>
		);
	}

	return (
		<div>
			<ClassList />
			<StudentForm />
		</div>
	);
}

// replace the root.render() call with this
root.render(
	<div>
		<StudentApp />
	</div>
);
