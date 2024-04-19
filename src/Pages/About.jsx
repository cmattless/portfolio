import { Link } from "react-router-dom";
const About = () => {
	return (
		<div className="prose mx-auto">
			<section>
				<h1>About Me</h1>
				<p>
					I'm a Creative Computing student well-versed in web and software
					development, with a flair for making technology that's user-friendly
					and engaging. I have solid skills in Python and C#, ensuring smooth
					operation on both the server and client sides.
				</p>
			</section>

			<section>
				<h3>Skills</h3>
				<ul>
					<li>
						<strong>Web Development:</strong> Skilled in HTML, CSS, Bootstrap,
						JavaScript, PHP, MySQL, Laravel, and the MERN stack, I aim to create
						universally usable and responsive websites.
					</li>
					<li>
						<strong>Software Engineering:</strong> Proficient in Python and C#,
						I focus on creating robust and maintainable software.
					</li>
					<li>
						<strong>Design & User Experience:</strong> I prioritize user
						experience in my designs, using tools like Figma to craft inviting
						and visually appealing digital spaces.
					</li>
					<li>
						<strong>Cloud Solutions & Networking:</strong> Experienced with
						Amazon Web Services, I build dependable cloud infrastructures,
						underpinned by a certified understanding of networking.
					</li>
					<li>
						<strong>Data Visualization:</strong> Proficient in translating data
						into narratives with R Studio, Tableau, and QlikView, I highlight
						and clarify key insights.
					</li>
				</ul>
			</section>

			<section>
				<h3>What I'm Doing</h3>
				<p>
					I'm currently participating in an internship at UCD Center for Cybersecurity and Cyber-Crime investigation. I am working on a variety of projects that are being developed for use by law enforcement agencies. 
				</p>
				<p>
					As part of my internship at UCD CCI I have designed and created the entirety of the front-end for a large project with active collaboration and feedback with the back-end team. 
				</p>
				<p>
					On top of that, I am currently the sole developer for a upcoming project that is in a proof of concept stage. I am using this project to introduce the other developers to Node and React in order to allow them to maintain the project after I finish my internship.

				</p>
			</section>

			<section>
				<h3>Get in Touch</h3>
				<p>
					If you're on the lookout for someone passionate about accessible and
					innovative technology, I'd be happy to have a conversation. Feel free
					to reach out through the <Link to="/contact">contact page</Link> on
					this site.
				</p>
			</section>
		</div>
	);
};

export default About;
