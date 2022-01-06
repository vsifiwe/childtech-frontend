import React from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import loboss from "../assets/loboss.png";

function Lessons() {
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
				<section>
					<div class="container max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-800">
						<div class="flex flex-wrap -mx-8">
							<div class="w-full lg:w-1/2 px-8">
								<div class="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
									<h2 class="mb-4 text-3xl lg:text-4xl font-bold font-heading dark:text-white">
										Scratch Level 1: Game Superstar
									</h2>{" "}
									<br />
									<p>
										In this course, students explore the most popular visual
										coding language for kids: Scratch. Scratch is block-based
										coding (like virtual LEGO!) that teaches kids the
										fundamentals of computer science. This course focuses on
										event listeners, loops, conditional statements, user input,
										Cartesian coordinates, variables, and message broadcasting.
										Read about why Scratch is the best beginning programming
										language for kids.
									</p>
								</div>
							</div>
							<div class="w-full lg:w-1/2 px-8">
								<ul class="space-y-12">
									<li class="flex -mx-4">
										<div class="px-4">
											<span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
												1
											</span>
										</div>
										<div class="px-4">
											<h3 class="my-2 text-xl font-semibold dark:text-white">
												Who's this course for
											</h3>
											<p class="text-gray-500 dark:text-gray-300 leading-loose">
												Ages 7-15
											</p>
										</div>
									</li>
									<li class="flex -mx-4">
										<div class="px-4">
											<span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
												2
											</span>
										</div>
										<div class="px-4">
											<h3 class="my-2 text-xl font-semibold dark:text-white">
												Prerequisites
											</h3>
											<p class="text-gray-500 dark:text-gray-300 leading-loose">
												<li> Sit still and focus for 50-minute sessions </li>
												<li> Read at a second grade level</li>
												<li>Understand what negative numbers are</li>
												<li>
													{" "}
													Type at least 15 words per minute and use a mouse
													independently
												</li>
											</p>
										</div>
									</li>
									<li class="flex -mx-4">
										<div class="px-4">
											<span class="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-blue-600">
												3
											</span>
										</div>
										<div class="px-4">
											<h3 class="my-2 text-xl font-semibold dark:text-white">
												Learning Goal
											</h3>
											<p class="text-gray-500 dark:text-gray-300 leading-loose pb-6">
												After completing this course, students are able to
												design and program their own games in Scratch, and are
												ready to advance to Scratch Level 2.
											</p>
										</div>
									</li>
								</ul>
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
								className="text-gray-300 fill-current"
								points="2560 0 2560 100 0 100"
							></polygon>
						</svg>
					</div>

					<div className="container mx-auto px-4">
						<div className="items-center flex flex-wrap">
							<div className="w-full md:w-4/12 ml-auto mr-auto px-4">
								<img alt="..." className="max-w-full" src={loboss} />
							</div>
							<div className="w-full md:w-5/12 ml-auto mr-auto px-4">
								<div className="md:pr-12">
									<h3 className="text-xl lg:text-3xl font-semibold">
										Learning Targets
									</h3>
									<p className="mt-4 text-lg leading-relaxed text-gray-600">
										Instructors update their students' progress towards
										proficiency in the Learning Targets during Check-Ins, which
										are built into our curriculum. During a Check-In session, a
										student works through specific questions and projects
										independently to demonstrate their proficiency in the
										Learning Targets while the instructor observes and provides
										guidance as needed. These sessions are meant to be
										low-pressure opportunities for instructors to assess student
										progress and provide actionable next steps a student can
										take to continue advancing towards proficiency in the
										Learning Targets. There are typically 2-3 Check-Ins per
										course.
									</p>
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
									Helpful coding resources
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
export default Lessons;
