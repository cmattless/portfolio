import React from "react";

const ProjectCard = ({ project }) => {
	const tags = project.tags.map((tag, i) => {
		return (
			<div key={i} className="badge badge-outline badge-info">
				{tag}
			</div>
		);
	});
	return (
		<div className="card lg:card-side bg-base-100 shadow-xl">
			<figure>
				<img src={project.images[0].path} alt={project.images[0].caption} />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{project.title}</h2>
				<p>{project.description}</p>
				<div className="card-actions justify-end">
					{tags}

					{project.website ? (
						<button className="btn btn-primary">OnlyFans</button>
					) : (
						""
					)}
					{project.github ? (
						<button className="btn btn-primary">GitHub</button>
					) : (
						""
					)}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
