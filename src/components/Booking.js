import React, { useState } from "react";
import { Row, Form, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Robot from "../assets/children.png";
import axios from "axios";

function Booking() {
	const [activeTab, setActiveTab] = useState("parent");
	const [display, setDisplay] = useState("none");

	let chooseInitake = {
		display: display,
	};

	function intake(e) {
		if (e.target.value === "2") {
			setDisplay("block");
		}
	}

	const [parentFirstname, setparentFirstname] = useState("");
	const [parentLastname, setparentLastname] = useState("");
	const [parentPhone, setparentPhone] = useState("");
	const [parentEmail, setparentEmail] = useState("");
	const [childName, setchildName] = useState("");
	const [childBirth, setchildBirth] = useState("");
	const [parentAddress, setparentAddress] = useState("");
	const [parentPrefDate, setparentPrefDate] = useState("");

	let handleparentPrefDateChange = (event) => {
		const target = event.target;
		const value = target.value;

		setparentPrefDate(value);
	};

	let handleParentPhoneChange = (event) => {
		const target = event.target;
		const value = target.value;

		setparentPhone(value);
	};

	let handleParentAddressChange = (event) => {
		const target = event.target;
		const value = target.value;

		setparentAddress(value);
	};

	let handleChildBirthChange = (event) => {
		const target = event.target;
		const value = target.value;

		setchildBirth(value);
	};

	let handleChildnameChange = (event) => {
		const target = event.target;
		const value = target.value;

		setchildName(value);
	};

	let handleParentEmailChange = (event) => {
		const target = event.target;
		const value = target.value;

		setparentEmail(value);
	};

	let handleParentFirstNameChange = (event) => {
		const target = event.target;
		const value = target.value;

		setparentFirstname(value);
	};

	let handleParentLastnameChange = (event) => {
		const target = event.target;
		const value = target.value;

		setparentLastname(value);
	};

	let handleParentSubmit = (event) => {
		event.preventDefault();

		let pdate = parentPrefDate.replace(" ", "T");
		let cdate = childBirth.replace(" ", "T");
		let pdata = {
			first_name: parentFirstname,
			last_name: parentLastname,
			telephone: parentPhone,
			email: parentEmail,
			address: parentAddress,
			desired_time: pdate,
			child_name: childName,
			child_dob: cdate,
			program: 1,
			course: 1,
		};

		axios
			.post(
				"https://childtech.herokuapp.com/api/appointment/parent/create",
				pdata
			)
			.then((response) => {
				if (response.status === 201) {
					alert("You have successfully booked a Parent appointment");
				} else {
					alert("Hey, we apologize. An error occured. Please try again");
				}
			})
			.catch((error) => {
				alert("Hey, we apologize. An error occured. Please try again");
			});
	};

	const [schoolHead, setschoolHead] = useState("");
	const [schoolName, setschoolName] = useState("");
	const [schoolEmail, setschoolEmail] = useState("");
	const [schoolPhone, setschoolPhone] = useState("");
	const [schoolNumber, setschoolNumber] = useState(0);
	const [schooladdress, setschooladdress] = useState("");
	const [schooolPrefDate, setschooolPrefDate] = useState("");

	let handleSchoolAddressChange = (event) => {
		const target = event.target;
		const value = target.value;

		setschooladdress(value);
	};

	let handleSchoolPrefDateChange = (event) => {
		const target = event.target;
		const value = target.value;

		setschooolPrefDate(value);
	};

	let handleSchoolPhoneChange = (event) => {
		const target = event.target;
		const value = target.value;

		setschoolPhone(value);
	};

	let handleSchoolEmailChange = (event) => {
		const target = event.target;
		const value = target.value;

		setschoolEmail(value);
	};

	let handleSchoolnameChange = (event) => {
		const target = event.target;
		const value = target.value;

		setschoolName(value);
	};

	let handleSchoolNumberChange = (event) => {
		const target = event.target;
		const value = target.value;

		setschoolNumber(value);
	};

	let handleSchoolHeadChange = (event) => {
		const target = event.target;
		const value = target.value;

		setschoolHead(value);
	};

	let handleSchoolSubmit = (event) => {
		event.preventDefault();

		let date = schooolPrefDate.replace(" ", "T");

		let data = {
			head_name: schoolHead,
			school_name: schoolName,
			number_of_people: schoolNumber,
			telephone: schoolPhone,
			address: schooladdress,
			desired_time: date,
			program: 1,
			course: 1,
		};

		axios
			.post(
				"https://childtech.herokuapp.com/api/appointment/school/create",
				data
			)
			.then((response) => {
				if (response.status === 201) {
					alert("You have successfully booked a School appointment");
				} else {
					alert("Hey, we apologize. An error occured. Please try again");
				}
			})
			.catch((error) => {
				alert("Hey, we apologize. An error occured. Please try again");
			});
	};

	return (
		<div>
			<Header />
			<div
				className="flex w-full min-h-full justify-center items-center"
				style={{ backgroundColor: "#F5F4F9" }}
			>
				<div
					className="p-4 min-w-full max-w-4xl lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg lg:rounded-lg"
					style={{ backgroundColor: "#F5F4F9" }}
				>
					<div className="lg:ml-28 m-6 lg:py-12 lg:flex lg:justify-center">
						<div className="px-6 lg:w-1/2 mt-28 md:rounded-lg sm:h-full">
							<img
								className="block mx-auto sm:mx-0 sm:shrink-0"
								src={Robot}
								alt="robot"
							/>
						</div>
						<div className="flex flex-col min-w-fit break-words w-full lg:w-6/12">
							<h1 className="font-bold mb-8 mt-8 text-lg lg:text-2xl text-center">
								Book your appointment here.
							</h1>
							<div className="flex justify-center space-x-16 lg:text-2xl pb-16">
								<button
									type="button"
									onClick={() => {
										setActiveTab("parent");
									}}
									className={`${
										activeTab === "parent" && "text-blue-500"
									} ring ring-2 rounded px-2 `}
								>
									Parent
								</button>
								<button
									className={`${
										activeTab !== "parent" && "text-blue-500"
									} ring ring-2 rounded px-2`}
									type="button"
									onClick={() => {
										setActiveTab("school");
									}}
								>
									School
								</button>
							</div>
							{/* parent booking */}
							{activeTab === "parent" ? (
								<Form className="mr-6">
									<Row className="mb-3">
										<Form.Group as={Col} controlId="formGridEmail">
											<Form.Label>Parent Names</Form.Label>
											<Form.Control type="text" />
										</Form.Group>

										<Form.Group as={Col} controlId="formGridName">
											<Form.Label>Parent ID</Form.Label>
											<Form.Control type="number" />
										</Form.Group>
									</Row>
									<Row className="mb-3">
										<Form.Group as={Col} controlId="formGridEmail">
											<Form.Label>Email Address</Form.Label>
											<Form.Control type="email" />
										</Form.Group>
										<Form.Group as={Col} controlId="formGridPhone">
											<Form.Label>Telephone</Form.Label>
											<Form.Control type="number" />
										</Form.Group>
										<Form.Group as={Col} controlId="formGridEmail">
											<Form.Label>Child's name</Form.Label>
											<Form.Control type="text" />
										</Form.Group>
									</Row>
									<Row className="mb-3">
										<Form.Group as={Col} controlId="formGridState">
											<Form.Group as={Col} controlId="formGridPhone">
												<Form.Label>Child's Birth Date</Form.Label>
												<Form.Control type="date" placeholder="" />
											</Form.Group>
										</Form.Group>
										<Form.Group as={Col} controlId="formGridState">
											<Form.Label>Choose Course</Form.Label>
											<Form.Select defaultValue="Choose...">
												<option>Coding</option>
												<option>Engineering/Robotics</option>
												<option>Practical science</option>
											</Form.Select>
										</Form.Group>

										<Form.Group as={Col} controlId="formGridState">
											<Form.Label>Choose Program</Form.Label>
											<Form.Select
												onChange={(e) => intake(e)}
												defaultValue="Choose..."
											>
												<option value="1">Weekend</option>
												<option value="2"> Holiday</option>
												<option value="3">Online</option>
											</Form.Select>
										</Form.Group>
										<div style={chooseInitake}>
											<Form.Group as={Col} controlId="formGridState">
												<Form.Label>Choose intake</Form.Label>
												<Form.Select defaultValue="Choose...">
													<option>December holiday</option>
													<option>April holiday</option>
													<option>June holiday</option>
												</Form.Select>
											</Form.Group>
										</div>
									</Row>
									<Row className="mb-3">
										<Form.Group as={Col} controlId="formGridPhone">
											<Form.Label>Address & Location</Form.Label>
											<Form.Control type="text" />
										</Form.Group>
										<Form.Group as={Col} controlId="formGridState">
											<Form.Group as={Col} controlId="formGridPhone">
												<Form.Label>Prefered studing Date</Form.Label>
												<Form.Control type="date" placeholder="" />
											</Form.Group>
										</Form.Group>
									</Row>

									<Button
										variant="primary"
										type="submit"
										className="flex justify-center w-28"
									>
										Submit
									</Button>
								</Form>
							) : (
								// school booking

								<Form className="mr-6">
									<Row className="mb-3">
										<Form.Group as={Col} controlId="formGridEmail">
											<Form.Label>Headmaster/Mistress name</Form.Label>
											<Form.Control type="text" />
										</Form.Group>
										<Form.Group as={Col} controlId="formGridName">
											<Form.Label>School name</Form.Label>
											<Form.Control type="text" />
										</Form.Group>
									</Row>
									<Row className="mb-3">
										<Form.Group as={Col} controlId="formGridEmail">
											<Form.Label>Email Address</Form.Label>
											<Form.Control type="email" />
										</Form.Group>
										<Form.Group as={Col} controlId="formGridPhone">
											<Form.Label>Telephone</Form.Label>
											<Form.Control type="number" />
										</Form.Group>
										<Form.Group as={Col} controlId="formGridPhone">
											<Form.Label>Number of children</Form.Label>
											<Form.Control type="number" />
										</Form.Group>
									</Row>
									<Row className="mb-3">
										<Form.Group as={Col} controlId="formGridPhone">
											<Form.Label>Address & Location</Form.Label>
											<Form.Control type="text" />
										</Form.Group>
										<Form.Group as={Col} controlId="formGridState">
											<Form.Label>Choose Program</Form.Label>
											<Form.Select
												onChange={(e) => intake(e)}
												defaultValue="Choose..."
											>
												<option value="1">School</option>
												<option value="2">Holiday</option>
												<option value="3">Weekend</option>
											</Form.Select>
										</Form.Group>
										<div style={chooseInitake}>
											<Form.Group as={Col} controlId="formGridState">
												<Form.Label>Choose intake</Form.Label>
												<Form.Select defaultValue="Choose...">
													<option>December holiday</option>
													<option>April holiday</option>
													<option>June holiday</option>
												</Form.Select>
											</Form.Group>
										</div>
									</Row>
									<Row className="mb-3">
										<Form.Group as={Col} controlId="formGridState">
											<Form.Label>Choose Course</Form.Label>
											<Form.Select defaultValue="Choose...">
												<option>Coding</option>
												<option>Engineering/Robotics</option>
												<option>Practical science</option>
											</Form.Select>
										</Form.Group>
										<Form.Group as={Col} controlId="formGridState">
											<Form.Group as={Col} controlId="formGridPhone">
												<Form.Label>Prefered Date</Form.Label>
												<Form.Control type="date" placeholder="" />
											</Form.Group>
										</Form.Group>
									</Row>
									<Button
										variant="primary"
										type="submit"
										className="flex justify-center w-28"
									>
										Submit
									</Button>
								</Form>
							)}
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
export default Booking;
