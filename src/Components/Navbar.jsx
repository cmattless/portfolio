import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [theme, setTheme] = useState(
		localStorage.getItem("theme") || "cupcake"
	);

	const handleThemeChange = () => {
		const newTheme = theme === "cupcake" ? "synthwave" : "cupcake";
		setTheme(newTheme);
	};

	useEffect(() => {
		document.documentElement.setAttribute("data-theme", theme);
		localStorage.setItem("theme", theme);
	}, [theme]);
	return (
		<>
			<div className="md:container-lg max-w-7xl mx-auto">
				<div className="navbar ">
					<div className="flex-1 ">
						<Link to="/" className="btn btn-ghost ">
							<img
								src="/logo.svg"
								alt="CM initials, vertical"
								srcSet=""
								width="45px"
							/>
						</Link>
					</div>
					<div className="flex-none gap-8">
						<ul className="menu menu-horizontal px-1">
							<li>
								<a href>
									<Link>Projects</Link>
								</a>
							</li>
							<li>
								<a href>
									<Link>Contact</Link>
								</a>
							</li>
						</ul>
						<label className="flex cursor-pointer gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<circle cx="12" cy="12" r="5" />
								<path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
							</svg>
							<input
								type="checkbox"
								className="toggle theme-controller"
								onChange={handleThemeChange}
								checked={theme === "synthwave"}
								value={theme}
							/>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
							</svg>
						</label>
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
