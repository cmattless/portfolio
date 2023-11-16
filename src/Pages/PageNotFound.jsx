import { useLocation, Link } from "react-router-dom";

const PageNotFound = () => {
	let location = useLocation();

	return (
		<main className=" md:container-lg max-w-lg mx-auto">
			<section className="px-5 prose flex flex-col justify-center items-center h-3/4">
				<img
					src="/404-image.svg"
					width="50%"
					alt="cartoon blue cat with ball of yarn. sign with 404 error above the cat."
					srcset=""
				/>
				<h1 className="text-center">
					Error 404. Sorry, the page '{location.pathname}' was not found
				</h1>

				<Link to="/">
					<button className="btn btn-info prose text-info-content">
						Take me back!
					</button>
				</Link>
			</section>
		</main>
	);
};

export default PageNotFound;
