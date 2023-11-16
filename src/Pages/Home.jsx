import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
	const words = ["Hi!", "Hello!", "Howdy! 🤠", "Välkommen!", "Tjena,"];
	const [wordIndex, setWordIndex] = useState(0);
	const [fade, setFade] = useState(true);

	useEffect(() => {
		const timer = setInterval(() => {
			setFade(false);
			setTimeout(() => {
				setWordIndex((wordIndex) => (wordIndex + 1) % words.length);
				setFade(true);
			}, 500);
		}, 5000);

		return () => clearInterval(timer);
	}, []);

	return (
		<>
			<main className="container max-w-7xl my-5 prose prose-slate ">
				<section className="flex parent flex-col justify-self-center py-48 sm:flex-row  justify-evenly gap-2 bg-primary rounded-t-2xl p-5 items-center ">
					<header className="flex flex-col gap-3 mask max-w-xl ">
						<h1 className="text-primary-content">
							<span
								className={`text-primary-content ${
									fade ? "fade-in" : "fade-out"
								}`}
							>
								{words[wordIndex]}
							</span>
							<br /> I'm Connor.
							<span role="img" aria-label="Waving hand">
								👋
							</span>
						</h1>
						<h2 className="text-primary-content text-xl sm:text-2xl md:text-3xl mt-4">
							I build engaging & accessible digital experiences.
						</h2>
						<h3 className="text-primary-content">
							Want to know more about me?
						</h3>
						<Link>
							<button className="btn btn-base">Get to know me.</button>
						</Link>
					</header>

					<img
						className="rounded-full mask w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
						src="/profile.jpg"
						alt="Side profile of Connor smiling"
					/>
					<div aria-hidden="true" className="square">
						&nbsp;
					</div>
				</section>

				<section className="flex flex-col py-48 sm:flex-row  parent justify-evenly gap-2 bg-secondary  p-5 items-center">
					<img
						className="mask rounded-xl w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
						src="/notebook.jpg"
						alt="notebook on a table with a pen resting on the page"
					/>
					<header className="flex flex-col mask gap-3 max-w-xl prose">
						<h2 className="text-secondary-content ">Work I've Done.</h2>
						<h3 className="text-secondary-content">
							I have many cool projects; let me show you them.
						</h3>
						<Link to="/projects">
							<button className="btn btn-primary w-2/5">See My Work</button>
						</Link>
					</header>

					<div aria-hidden="true" className="triangle">
						&nbsp;
					</div>
				</section>
				<section className="flex flex-col justify-self-center py-48 sm:flex-row justify-evenly gap-2 bg-success rounded-b-2xl p-5 items-center parent">
					<header className="flex flex-col mask gap-3 max-w-xl prose">
						<h2 className="text-success-content ">Contact Me.</h2>
						<h3 className="text-success-content ">
							If you have an awesome idea, a position I may be interested in, or
							just want to say hi. Send me a message!
						</h3>
						<button className="btn btn-secondary w-2/6">Send a message</button>
					</header>

					<div className="bubble" aria-hidden="true">
						&nbsp;
					</div>
				</section>
			</main>
		</>
	);
};

export default Home;
