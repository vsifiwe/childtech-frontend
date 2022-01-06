import React, { useState, useEffect } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { Link } from "react-router-dom";

import eventimag from "../assets/online.png";
import axios from "axios";

function Events() {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		axios
			.get("http://127.0.0.1:8000/api/events/")
			.then((response) => setEvents(response.data));
	}, []);

	return (
		<div>
			<Header />
			<div
				className="flex w-full min-h-full justify-center items-center"
				style={{ backgroundColor: "/pasteventsF5F4F9" }}
			>
				<div
					className="p-4 min-w-full max-w-5xl mt-16"
					style={{ backgroundColor: "/pasteventsF5F4F9" }}
				>
					<div className="flex justify-center font-bold p-8">
						<h1 className="lg:text-3xl text-xl text-center font-bold text-blue-500">
							Past Events
						</h1>
					</div>

					{/* starting card */}
					<div class="max-w-5xl mx-auto flex flex-col lg:flex-row justify-between space-x-4 space-y-6">
						<div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 transform transition cursor-pointer hover:-translate-y-6 m-6">
							<Link to="/pastevents" target="_blank">
								<img src={eventimag} alt="img" class="rounded-t-lg" />
							</Link>
							<div class="p-5">
								<Link to="/pastevents">
									<h5 class="text-gray-900 font-bold text-xl lg:text-2xl tracking-tight mb-2 dark:text-white">
										Building own robot
									</h5>
								</Link>
								<p class="font-normal text-gray-700 mb-3 dark:text-gray-400">
									A robot is a machine—especially one programmable by a
									computer—capable of carrying out a complex series of actions
									automatically.
								</p>
								<Link
									to="/pastevents"
									class="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-400 dark:focus:ring-blue-800"
								>
									View
									<svg
										class="-mr-1 ml-2 h-4 w-4"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
											clip-rule="evenodd"
										></path>
									</svg>
								</Link>
							</div>
						</div>
						<div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 transform transition cursor-pointer hover:-translate-y-6 m-6">
							<Link to="/pastevents">
								<img src={eventimag} alt="img" class="rounded-t-lg" />
							</Link>
							<div class="p-5">
								<Link to="/pastevents">
									<h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
										Robot
									</h5>
								</Link>
								<p class="font-normal text-gray-700 mb-3 dark:text-gray-400">
									A robot is a machine—especially one programmable by a
									computer—capable of carrying out a complex series of actions
									automatically.
								</p>
								<Link
									to="/pastevents"
									class="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-400 dark:focus:ring-blue-800"
								>
									View
									<svg
										class="-mr-1 ml-2 h-4 w-4"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
											clip-rule="evenodd"
										></path>
									</svg>
								</Link>
							</div>
						</div>
						<div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 transform transition cursor-pointer hover:-translate-y-6 m-6">
							<Link to="/pastevents">
								<img src={eventimag} alt="img" class="rounded-t-lg" />
							</Link>
							<div class="p-5">
								<Link to="/pastevents">
									<h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
										Robot
									</h5>
								</Link>
								<p class="font-normal text-gray-700 mb-3 dark:text-gray-400">
									A robot is a machine—especially one programmable by a
									computer—capable of carrying out a complex series of actions
									automatically.
								</p>
								<Link
									to="/pastevents"
									class="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-400 dark:focus:ring-blue-800"
								>
									View
									<svg
										class="-mr-1 ml-2 h-4 w-4"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
											clip-rule="evenodd"
										></path>
									</svg>
								</Link>
							</div>
						</div>
					</div>
					{/* End card */}

					{/* starting card */}

					<div class="max-w-5xl mx-auto flex flex-col lg:flex-row justify-between space-x-4 m-6 space-y-6 mt-16">
						<div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 transform transition cursor-pointer hover:-translate-y-6 m-6">
							<Link to="/pastevents">
								<img src={eventimag} alt="img" class="rounded-t-lg" />
							</Link>
							<div class="p-5">
								<Link to="/pastevents">
									<h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
										Robot
									</h5>
								</Link>
								<p class="font-normal text-gray-700 mb-3 dark:text-gray-400">
									A robot is a machine—especially one programmable by a
									computer—capable of carrying out a complex series of actions
									automatically.
								</p>
								<Link
									to="/pastevents"
									class="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-400 dark:focus:ring-blue-800"
								>
									View
									<svg
										class="-mr-1 ml-2 h-4 w-4"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
											clip-rule="evenodd"
										></path>
									</svg>
								</Link>
							</div>
						</div>
						<div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 transform transition cursor-pointer hover:-translate-y-6 m-6">
							<Link to="/pastevents">
								<img src={eventimag} alt="img" class="rounded-t-lg" />
							</Link>
							<div class="p-5">
								<Link to="/pastevents">
									<h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
										Robot
									</h5>
								</Link>
								<p class="font-normal text-gray-700 mb-3 dark:text-gray-400">
									A robot is a machine—especially one programmable by a
									computer—capable of carrying out a complex series of actions
									automatically.
								</p>
								<Link
									to="/pastevents"
									class="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-400 dark:focus:ring-blue-800"
								>
									View
									<svg
										class="-mr-1 ml-2 h-4 w-4"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
											clip-rule="evenodd"
										></path>
									</svg>
								</Link>
							</div>
						</div>
						<div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 transform transition cursor-pointer hover:-translate-y-6 m-6">
							<Link to="/pastevents">
								<img src={eventimag} alt="img" class="rounded-t-lg" />
							</Link>
							<div class="p-5">
								<Link to="/pastevents">
									<h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
										Robot
									</h5>
								</Link>
								<p class="font-normal text-gray-700 mb-3 dark:text-gray-400">
									A robot is a machine—especially one programmable by a
									computer—capable of carrying out a complex series of actions
									automatically.
								</p>
								<Link
									to="/pastevents"
									class="text-white bg-blue-400 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-400 dark:focus:ring-blue-800"
								>
									View
									<svg
										class="-mr-1 ml-2 h-4 w-4"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
											clip-rule="evenodd"
										></path>
									</svg>
								</Link>
							</div>
						</div>
					</div>
					{/* End of Cards */}

					<div class="md:w-7/12 lg:2/3 mx-auto relative py-20 ">
						<h1 class="text-3xl text-center font-bold text-blue-500">
							Upcomming Events
						</h1>
						<div class="border-l-2 mt-4">
							{/* <!-- Card 1 --> */}
							<div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-400 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
								{/* <!-- Dot Follwing the Left Vertical Line --> */}
								<div class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

								{/* <!-- Line that connecting the box with the vertical line --> */}
								<div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

								{/* <!-- Content that showing in the box --> */}
								<div class="flex-auto">
									<h1 class="text-lg p-2">Event 1</h1>
									<h1 class="text-xl font-bold p-2">
										Orientation and Briefing on Uniliver basics
									</h1>
									<h3 className="p-2">Leapr Lab Rugando</h3>
									<h3 className="p-2">10 December 2021</h3>
								</div>
								<Link
									to="/booking"
									class="text-center ring-white p-2 rounded ring-2 text-white hover:text-gray-300"
								>
									Book for Event
								</Link>
							</div>

							{/* <!-- Card 2 --> */}
							<div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-400 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
								{/* <!-- Dot Follwing the Left Vertical Line --> */}
								<div class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

								{/* <!-- Line that connecting the box with the vertical line --> */}
								<div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

								{/* <!-- Content that showing in the box --> */}
								<div class="flex-auto">
									<h1 class="text-lg p-2">Event 2</h1>
									<h1 class="text-xl font-bold p-2">
										Orientation and Briefing on Uniliver basics
									</h1>
									<h3 className="p-2">Creativity Lab kimihurura</h3>
									<h3 className="p-2">14 December 2021</h3>
								</div>
								<Link
									to="/booking"
									class="text-center ring-white p-2 rounded ring-2 text-white hover:text-gray-300"
								>
									Book for Event
								</Link>
							</div>

							{/* <!-- Card 3 --> */}
							<div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-400 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
								{/* <!-- Dot Follwing the Left Vertical Line --> */}
								<div class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

								{/* <!-- Line that connecting the box with the vertical line --> */}
								<div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

								{/* <!-- Content that showing in the box --> */}
								<div class="flex-auto">
									<h1 class="text-lg p-2">Event 3</h1>
									<h1 class="text-xl font-bold p-2">
										Orientation and Briefing on Uniliver basics
									</h1>
									<h3 className="p-2">FAB Lab kacyiru</h3>
									<h3 className="p-2">17 December 2021</h3>
								</div>
								<Link
									to="/booking"
									class="text-center ring-white p-2 rounded ring-2 text-white hover:text-gray-300"
								>
									Book for Event
								</Link>
							</div>

							{/* <!-- Card 4 --> */}
							<div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-400 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
								{/* <!-- Dot Follwing the Left Vertical Line --> */}
								<div class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

								{/* <!-- Line that connecting the box with the vertical line --> */}
								<div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

								{/* <!-- Content that showing in the box --> */}
								<div class="flex-auto">
									<h1 class="text-lg p-2">Event 4</h1>
									<h1 class="text-xl font-bold p-2">
										Orientation and Briefing on Uniliver basics
									</h1>
									<h3 className="p-2">KLAB kacyiru</h3>
									<h3 className="p-2">22 December 2021</h3>
								</div>
								<Link
									to="/booking"
									class="text-center ring-white p-2 rounded ring-2 text-white hover:text-gray-300"
								>
									Book for Event
								</Link>
							</div>

							{/* <!-- Card 5 --> */}
							<div class="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-400 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
								{/* <!-- Dot Follwing the Left Vertical Line --> */}
								<div class="w-5 h-5 bg-blue-600 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>

								{/* <!-- Line that connecting the box with the vertical line --> */}
								<div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>

								{/* <!-- Content that showing in the box --> */}
								<div class="flex-auto">
									<h1 class="text-lg p-2">Event 5</h1>
									<h1 class="text-xl font-bold p-2">
										Orientation and Briefing on Uniliver basics
									</h1>
									<h3 className="p-2">Online</h3>
									<h3 className="p-2">25 January 2022</h3>
								</div>
								<Link
									to="/booking"
									class="text-center ring-white p-2 rounded ring-2 text-white hover:text-gray-300"
								>
									Book for Event
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
export default Events;
