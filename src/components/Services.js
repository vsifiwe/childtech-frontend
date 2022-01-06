import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import learner from "../assets/leaner.png";

function Services() {
	return (
		<div>
			<Header />
			<div
				className="flex w-full min-h-full justify-center items-center"
				style={{ backgroundColor: "#F5F4F9" }}
			>
				<div
					className="p-4 min-w-full max-w-4xl"
					style={{ backgroundColor: "#F5F4F9" }}
				>
					<div class="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 pt-96">
						<div class="bg-blue-400 w-full shadow rounded sm:p-12 -mt-72">
							<h1 className="text-center text-white lg:text-2xl text-lg font-semibold">
								ChildTech teaching services
							</h1>
							<div className="flex flex-col items-center">
								<div className="lg:pt-12 pt-6 w-full md:w-3/4 px-4 text-center transform transition cursor-none hover:-translate-y-6">
									<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
										<div className="px-4 flex-auto">
											<h6 className="text-xl font-semibold p-6">
												Coding/Programming
											</h6>
											<img
												className="m-6 block mx-auto sm:mx-0 sm:shrink-0"
												src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTF8fHByb2dyYW1taW5nJTIwZm9yJTIwYWZyaWNhbiUyMGtpZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
												alt=""
											/>
											<p className="mt-2 mb-8 text-gray-900 pt-6 pb-4">
												We teach children how to deal with coding to create
												their own interactive stories, games and animations to
												prepare them for a better future in Tech careers.
											</p>
										</div>
									</div>
								</div>

								<div className="lg:pt-12 pt-6 w-full md:w-3/4 px-4 text-center transform transition cursor-none hover:-translate-y-6">
									<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
										<div className="px-4 flex-auto">
											<h6 className="text-xl font-semibold p-6">
												Engineering/Robotics
											</h6>
											<img
												className="ml-6 block mx-auto sm:mx-0 sm:shrink-0"
												src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNoaWxkJTIwaW4lMjBpbmZvcm1hdGlvbiUyMHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
												alt=""
											/>
											<p className="mt-2 mb-8 text-gray-900 pt-6 pb-4">
												We teach children to deal with the engineering part this
												allowing them to build different components including
												robots, to increase their creativity level, problem
												solving and decision making skills.
											</p>
										</div>
									</div>
								</div>
								<div className="lg:pt-12 pt-6 w-full md:w-3/4 px-4 text-center transform transition cursor-none hover:-translate-y-6">
									<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
										<div className="px-4 flex-auto">
											<h6 className="text-xl font-semibold p-6">Science</h6>
											<img className="ml-6 -mt-8" src={learner} alt="" />
											<p className="mt-2 mb-8 text-gray-900 pt-6 pb-4">
												We teach children how to deal with science practically
												which helps them develop their observation level and
												improve their critical thinking level.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
export default Services;
