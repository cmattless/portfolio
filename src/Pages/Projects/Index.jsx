import projectsJSON from "../../assets/data/projects.json";
import ProjectCard from "../../Components/ProjectCard";
import { useState } from "react";
const Index = () => {
	const [projects, setProjects] = useState(projectsJSON);
	const projectList = projects.map((project, i) => {
		// cycle through bg classes
		const bgClass = ["bg-primary", "bg-secondary", "bg-success", "bg-accent"][
			i % 4
		];

		let alt;
		if (i % 2 == 0) {
			alt = true;
		} else {
			alt = false;
		}
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
				{projectList}
			</main>
		</>
	);
};

export default Index;
