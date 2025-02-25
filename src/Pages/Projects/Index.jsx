import axios from "axios";
import ProjectCard from "../../Components/ProjectCard";
import { useState, useEffect } from "react";

const Index = () => {
	const [projects, setProjects] = useState([]);

	const getProjects = () => {
		axios
			.get(
				"https://connor-portfolio-35c95-default-rtdb.europe-west1.firebasedatabase.app/projects.json"
			)
			.then((res) => {
				console.log(res.data);
				setProjects(res.data);
			})
			.catch((err) => {
				console.log(err.data);
			});
	};

	useEffect(() => {
		getProjects();
	}, []);

	const projectList = projects
		.sort((a, b) => {
			return a.date - b.date;
		})
		.map((project, i) => {
			// cycle through bg classes
			const bgClass = ["bg-primary", "bg-error", "bg-secondary", "bg-warning"][
				i % 4
			];

			let alt;
			i % 2 == 0 ? (alt = true) : (alt = false);
			console.log(project);
			return (
				<section
					key={i}
					className={`flex parent flex-col justify-self-center py-48 sm:flex-row justify-evenly gap-2 ${bgClass} ${
						i === 0 ? "rounded-t-2xl" : null
					} ${
						i === projects.length - 1 ? "rounded-b-2xl" : null
					} p-5 items-center`}
				>
					<ProjectCard project={project} alt={alt} />
				</section>
			);
		});
	return (
		<>
			<main className="container max-w-7xl my-5 prose prose-slate ">
				<section className="ps-3 xl:p-0">
					<h1 className="m-0">Featured Projects.</h1>
					<h3 className="mt-1 mb-5">
						{projects.length > 0
							? "A showcase of my work."
							: "My projects are not available right now, sorry."}
					</h3>
				</section>
				{projectList}
			</main>
		</>
	);
};

export default Index;
