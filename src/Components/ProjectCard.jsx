import React from "react";

const ProjectCard = ({ project, alt }) => {
	const tags = project.tags?.map((tag, i) => {
		return (
			<div key={i} className="badge mx-0.5 badge-ghost badge-base">
				{tag}
			</div>
		);
	});
	return (
		<>
			{!alt && (
				<>
					{project.images ? (
						<img
							className="mask rounded-xl w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
							src={project.images[0].path}
							alt={project.images[0].caption}
						/>
					) : (
						<img
							className="mask rounded-xl w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
							src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
						/>
					)}
					<div className="triangle"></div>
				</>
			)}

			<header className="flex flex-col mask gap-3 max-w-xl prose">
				<h2 className="text-success-content ">{project.title}</h2>
				<h3 className="text-success-content ">{project.description}</h3>
				<div className="tags">{tags}</div>
				<div className="prose gap-2">
					{project.github ? (
						<a href={project.github}  className="btn btn-base">GitHub</a >
					) : null}
					{project.website ? (
						<a href={project.website}  className="btn btn-base">Website</a >
					) : null}
				</div>
			</header>
			{alt && (
				<>
					{project.images ? (
						<img
							className="mask rounded-xl w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
							src={project.images[0].path}
							alt={project.images[0].caption}
						/>
					) : (
						<img
							className="mask rounded-xl w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
							src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
						/>
					)}
					<div className="square"></div>
				</>
			)}
		</>
	);
};

export default ProjectCard;
