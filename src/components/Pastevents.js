import React from "react";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import lobo from "../assets/lobo.png";
import kids from "../assets/kids.png";

function Pastevents() {
	return (
		<div>
			<Header />
			<main>
				<div
					className="relative pb-32 flex content-center items-center justify-center"
					style={{
						minHeight: "2vh",
					}}
				></div>

				<section className="pb-20 bg-gray-300 -mt-32">
					<div className="container mx-auto px-4">
						<div className="flex flex-wrap items-center mt-32">
							<div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
								<h3 className=" text-lg lg:text-3xl mb-2 font-semibold leading-normal">
									Building own robotics from scratch
								</h3>
								<p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
									Don't let your uses guess by attaching tooltips and popoves to
									any element. Just make sure you enable them first via
									JavaScript.
								</p>
								<p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
									The kit comes with three pre-built pages to help you get
									started faster. You can change the text and images and you're
									good to go. Just make sure you enable them first via
									JavaScript.
								</p>
							</div>

							<div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
								<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-white">
									<img
										alt="..."
										src={kids}
										className="w-full align-middle rounded-t-lg"
									/>
									<blockquote className="relative p-8 mb-4">
										<svg
											preserveAspectRatio="none"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 583 95"
											className="absolute left-0 w-full block"
											style={{
												height: "95px",
												top: "-94px",
											}}
										>
											<polygon
												points="-30,95 583,95 583,65"
												className="text-blue-400 fill-current"
											></polygon>
										</svg>
										<h4 className="text-xl font-bold text-blue-400 text-center">
											Event details
										</h4>
										<div className="space-y-2">
											<div className="flex justify-between">
												<span className="font-bold">Start date:</span>
												<span>08th December 2021</span>
											</div>
											<div className="flex justify-between">
												<span className="font-bold">Start time:</span>
												<span>10:00am</span>
											</div>
											<div className="flex justify-between">
												<span className="font-bold">End Date:</span>
												<span>14th December 2021</span>
											</div>
											<div className="flex justify-between">
												<span className="font-bold">End time:</span>
												<span>5:00pm</span>
											</div>
											<div className="flex justify-between">
												<span className="font-bold">Location:</span>
												<span>Klab/Kacyiru, Kigali city</span>
											</div>
											<div className="flex justify-between text-blue-800">
												<span className="font-bold">Status:</span>
												<span>Finished</span>
											</div>
										</div>
									</blockquote>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="relative py-20">
					<div
						className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
						style={{ height: "80px" }}
					>
						<svg
							className="absolute bottom-0 overflow-hidden"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
							version="1.1"
							viewBox="0 0 2560 100"
							x="0"
							y="0"
						>
							<polygon
								className="text-white fill-current"
								points="2560 0 2560 100 0 100"
							></polygon>
						</svg>
					</div>

					<div className="container mx-auto px-4">
						<div className="items-center flex flex-wrap">
							<div className="w-full md:w-4/12 ml-auto mr-auto px-4">
								<img alt="..." className="max-w-full" src={lobo} />
							</div>
							<div className="w-full md:w-5/12 ml-auto mr-auto px-4">
								<div className="md:pr-12">
									<h3 className="text-xl lg:text-3xl font-semibold">
										Benefits of Robotics for parents
									</h3>
									<p className="mt-4 text-lg leading-relaxed text-gray-600">
										As a parent, you may be struggling to figure out what
										extracurriculars to get your children involved in and which
										extracurriculars will be the best for your child in the long
										run. You may be asking yourself:
									</p>
									<ul className="list-none mt-6">
										<li className="py-2">
											<div className="flex items-center">
												<div>
													<span className="text-xs font-semibold inline-block w-5 h-5 py-1 px-2 uppercase rounded-full text-white bg-blue-400 mr-3"></span>
												</div>
												<div>
													<h4 className="text-gray-600">why Robotics?</h4>
												</div>
											</div>
										</li>
										<li className="py-2">
											<div className="flex items-center">
												<div>
													<span className="text-xs font-semibold inline-block w-5 h-5 py-1 px-2 uppercase rounded-full text-white bg-blue-400 mr-3">
														{/* <i className="fab fa-html5"></i> */}
													</span>
												</div>
												<div>
													<h4 className="text-gray-600">
														What skills do you need for robotics?
													</h4>
												</div>
											</div>
										</li>
										<li className="py-2">
											<div className="flex items-center">
												<div>
													<span className="text-xs font-semibold inline-block w-5 h-5 py-1 px-2 uppercase rounded-full text-white bg-blue-400 mr-3">
														{/* <i className="far fa-paper-plane"></i> */}
													</span>
												</div>
												<div>
													<h4 className="text-gray-600">
														What has robotics taught me?{" "}
													</h4>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="pb-20 relative block bg-gray-300">
					<div
						className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
						style={{ height: "80px" }}
					>
						<svg
							className="absolute bottom-0 overflow-hidden"
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
							version="1.1"
							viewBox="0 0 2560 100"
							x="0"
							y="0"
						>
							<polygon
								className="text-gray-300 fill-current"
								points="2560 0 2560 100 0 100"
							></polygon>
						</svg>
					</div>

					<div className="container mx-auto px-4 lg:pt-24 lg:pb-24">
						<div className="flex flex-wrap text-center justify-center">
							<div className="w-full lg:w-6/12 px-4">
								<h2 className="text-xl lg:text-3xl font-semibold text-gray-900">
									Other robotics Coding Resources
								</h2>
								<p className="text-lg leading-relaxed mt-4 mb-4 text-gray-900">
									If you are looking to learn how to code separately from
									ChilTech Robotics programming, here are a few links to get you
									started.
								</p>
							</div>
						</div>
						<div className="flex flex-wrap mt-12 justify-center">
							<div className="w-full lg:w-3/12 px-4 text-center">
								<div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
									<i className="fas fa-medal text-xl"></i>
								</div>
								<h6 className="text-xl mt-5 font-semibold text-gray-900">
									<a
										href="https://codecombat.com/"
										target="_blank"
										rel="noreferrer"
									>
										{" "}
										Code Combat
									</a>
								</h6>
								<p className="mt-2 mb-4 text-gray-900">
									Code Combat teaches the coding languages JavaScript and Python
									through the format of video games. Students program their
									avatar too get through the levels.
								</p>
							</div>
							<div className="w-full lg:w-3/12 px-4 text-center">
								<div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
									<i className="fas fa-poll text-xl"></i>
								</div>
								<h5 className="text-xl mt-5 font-semibold text-gray-900">
									<a
										href="https://www.khanacademy.org/"
										target="_blank"
										rel="noreferrer"
									>
										{" "}
										Khan academy{" "}
									</a>
								</h5>
								<p className="mt-2 mb-4 text-gray-900">
									Khan academy has detailed video tutorials and fun activities
									that teach the coding languages JavaScript or HTML.
								</p>
							</div>
							<div className="w-full lg:w-3/12 px-4 text-center">
								<div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
									<i className="fas fa-lightbulb text-xl"></i>
								</div>
								<h5 className="lg:text-xl mt-5 font-semibold textgray-900">
									<a
										href="https://scratch.mit.edu/"
										target="_blank"
										rel="noreferrer"
									>
										{" "}
										Scratch
									</a>
								</h5>
								<p className="mt-2 mb-4 text-gray-900">
									Scratch is a very popular website with a block-based
									programming language that allows children to create their own
									mini projects.
								</p>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
export default Pastevents;
