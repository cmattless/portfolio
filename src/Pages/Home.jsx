const Home = () => {
	return (
		<main className="bg-neutral-300/30 font-mono">
			<section
				id="me"
				className="flex flex-col lg:flex-row gap-2 justify-center lg:justify-evenly items-center w-full h-screen"
			>
				<div
					id="left"
					className="flex flex-col flex-1 justify-center items-center"
				>
					<article className="flex flex-col md:flex-row justify-center items-center gap-8">
						<img
							src="/me.JPEG"
							alt=""
							className="w-1/4 md:w-1/5 lg:w-1/5 mask mask-squircle"
						/>
						<div className="">
							<h1 className=" text-slate-800 text-4xl">Connor Mattless</h1>
							<span className="text-lg text-slate-500"> Dublin, Ireland</span>
							<div className="mt-5">
								<p>Want to know what I've been working on?</p>
								<a className="underline cursor-pointer" href="/#about">
									Click Here
								</a>
								!
							</div>
						</div>
					</article>
				</div>
				<div
					id="right"
					className="flex flex-col flex-1 justify-center items-center text-slate-700 gap-5"
				>
					<article className="flex flex-col justify-center items-center lg:items-start gap-8">
						{" "}
						<h2 className=" text-3xl px-3 lg:px-0 text-center lg:text-start">
							Assistant Cyber Analyst
						</h2>
						<span className="text-2xl px-3 lg:px-0 text-center lg:text-start">
							@ UCD Center for Cybersecurity & Cyber-crime investigation.
						</span>
						<div className="flex flex-col gap-2">
							<a
								className="hover:underline"
								href="https://www.linkedin.com/in/connor-mattless/"
							>
								linkedin.com/in/connor-mattless/
							</a>
							<a
								className="hover:underline"
								href="mailto:connormattless@gmail.com"
							>
								connormattless@gmail.com
							</a>

							<a
								className="hover:underline"
								href="https://github.com/cmattless"
							>
								github.com/cmattless
							</a>
						</div>
					</article>
				</div>
			</section>
			<section
				id="about"
				className="flex flex-col bg-neutral-300 lg:flex-row gap-2 justify-evenly px-15 items-center w-full h-screen"
			>
				<div
					id="left"
					className="flex flex-col justify-center items-center flex-1"
				>
					<h1 className=" text-slate-800 text-4xl">What I've been doing.</h1>
				</div>
				<aside className="flex flex-col justify-center items-center gap-10 flex-1">
					{" "}
					<div
						id="right"
						className="flex flex-col justify-center item-center  text-slate-700 gap-5"
					>
						<h3 className=" text-2xl m-0 p-0">
							Center for Cybersecurity and Cyber-crime investigation
						</h3>

						<p>2024 - Present | University College Dublin</p>
						<div className="flex flex-col gap-2">
							<p>
								Developed software for law enforcement agencies as part of the{" "}
								<a
									href="https://thefreetoolproject.eu"
									className="underline hover:text-slate-950 font-bold"
								>
									FREETOOL project
								</a>
								, utilising Node, React, Electron, and Python among many more
								technologies to create user-friendly and intuitive software for
								investigators.
							</p>
							<p>
								<a
									className="underline hover:text-slate-950"
									href="https://www.linkedin.com/posts/europol_cybercrime-ugcPost-7428109361731891200-mvG7"
								>
									Collaborated with <b> Europol</b>
								</a>{" "}
								to develop a proof of concept tool for their{" "}
								<a
									className="underline hover:text-slate-950"
									href="http://https://www.europol.europa.eu/about-europol/european-cybercrime-centre-ec3/ec3-partners"
								>
									EC3 AGRD initiative.
								</a>{" "}
								Supporting law enforcement agencies investigating and combating
								cybercrime at strategic, operational, technical levels.
							</p>

							<a
								className="hover:underline"
								href="https://www.ecteg.eu/projects/li-standards/"
							>
								Participated in workshops organised by <b>ECTEG</b> to develop
								pedagogical material for training law enforcement agencies (LEA)
								in lawful interception and network forensics.
							</a>
							<p>
								Developed websites for both the{" "}
								<a
									href="https://thefreetoolproject.eu"
									className="underline hover:text-slate-950 font-bold"
								>
									FREETOOL
								</a>{" "}
								and{" "}
								<a
									href="https://hoplite-project.eu/"
									className="underline hover:text-slate-950 font-bold"
								>
									{" "}
									HOPLITE
								</a>{" "}
								projects.
							</p>
						</div>
					</div>
				</aside>
			</section>
			<section
				id="about"
				className="flex flex-col-reverse bg-neutral-300/50 lg:flex-row gap-2 justify-evenly px-15 items-center w-full h-screen"
			>
				<aside className="flex flex-col gap-10 justify-center items-center flex-1">
					{" "}
					<div
						id="right"
						className="flex flex-col justify-center item-center  text-slate-700 gap-5"
					>
						<h3 className=" text-2xl m-0 p-0">
							Dun Laoghaire Institute of Art, Design and Technology
						</h3>

						<p>2021 - 2025 | BSc(Hons) Creative Computing </p>
						<div className="flex flex-col gap-2">
							<p>
								Graduating with <b>1st class honours</b> and nominated as{" "}
								<b>student of the year</b>, I developed a wide range of skills
								in web and software development, design, data visualisation,
								cloud solutions, and networking. I also had the opportunity to
								work on a variety of projects, including a major project where I
								trained an object detection AI model to detect potentially
								injured persons from drone based camera platforms.
							</p>
						</div>
					</div>
				</aside>
				<div
					id="left"
					className="flex flex-col justify-center items-center flex-1"
				>
					<h1 className=" text-slate-800 text-4xl">Where I've been.</h1>
				</div>
			</section>
			<section
				id="about"
				className="flex flex-col-reverse bg-neutral-300/50 lg:flex-row gap-2 justify-evenly px-15 items-center w-full py-10"
			>
				<div
					id="left"
					className="flex flex-col justify-evenly items-center flex-1"
				>
					{/* scroll to top */}
					<a href="/#me">
						<small className="underline text-cente w-full">
							Return to top.
						</small>
					</a>
					<br />
					Copyright © {new Date().getFullYear()} Connor Mattless. All rights
					reserved.
				</div>
			</section>
		</main>
	);
};

export default Home;
