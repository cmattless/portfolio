import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<>
			<main className="container max-w-7xl prose my-5 grid grid-cols-2 justify-center items-center h-screen">
				<section id="left" className="flex justify-center item-center">
					<h1 className="font-mono text-black">Connor Mattless</h1>
				</section>
				{/* vertical dividing line */}
				<div className="divider-horizontal"></div>
				<section
					id="right"
					className="flex flex-col justify-center item-center font-mono"
				>
					<h2 className="text-slate-500">
						Assistant Cyber Analyst, Software Engineer, and Web Developer.
					</h2>
					<p className="text-slate-500">
						Welcome to my personal portfolio website! Here, you'll find a
						collection of my projects, skills, and experiences in the world of
						software development. I'm passionate about creating innovative
						solutions and sharing my knowledge with the community. Feel free to
						explore my work and get in touch if you'd like to collaborate or
						learn more about me.
					</p>
				</section>
			</main>
		</>
	);
};

export default Home;
