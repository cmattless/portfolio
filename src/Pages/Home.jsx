import { useEffect, useState } from "react";

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
				<section className="flex parent flex-col justify-self-center py-64 sm:flex-row  justify-evenly gap-2 bg-primary rounded-t-2xl p-5 items-center ">
					<header className="flex flex-col gap-3 mask max-w-xl ">
						<h1 className="">
							<span className={`${fade ? "fade-in" : "fade-out"}`}>
								{words[wordIndex]}
							</span>
							<br /> I'm Connor
							<span role="img" aria-label="Waving hand">
								👋
							</span>
						</h1>
						<h2 className="text-xl sm:text-2xl md:text-3xl mt-4">
							I build engaging & accessible digital experiences.
						</h2>
					</header>

					<img
						className="rounded-full mask w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
						src="/profile.jpg"
						alt="Side profile of Connor smiling"
					/>
					<div aria-hidden="true" className="bubble">
						&nbsp;
					</div>
				</section>

				<section className="flex flex-col py-64 sm:flex-row  parent justify-evenly gap-2 bg-secondary  p-5 items-center">
					<header className="flex flex-col gap-3 max-w-xl ">
						<h2 className="">Have a look at some of the work i've done</h2>
					</header>

					<div aria-hidden className="triangle">
						&nbsp;
					</div>
				</section>
				<section className="flex flex-col justify-self-center py-64 sm:flex-row justify-evenly gap-2 bg-success rounded-b-2xl p-5 items-center">
					<h2 className="text-3xl sm:text-4xl md:text-5xl">More About Me</h2>
				</section>
			</main>
		</>
	);
};

export default Home;
