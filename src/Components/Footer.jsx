import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return (
		<>
			<footer className="mx-auto max-w-2xl">
				<div className="divider divider-info">
					<div className="tooltip tooltip-info" data-tip="❤">
						<small className="text-slate-500">
							&copy; Connor Mattless {new Date().getFullYear()}
						</small>
					</div>
				</div>
				<div className="text-center my-2">
					<Link to="/privacy">
						<small className="text-brand prose-figure cursor-pointer">
							Privacy Policy
						</small>
					</Link>
				</div>
			</footer>
		</>
	);
};

export default Footer;
