import { Link } from "react-router-dom";
const About = () => {
	return (
		<div className="prose mx-auto">
		  <header>
    <h1>Professional Profile</h1>
  </header>

  <section>
    <p>
      I'm a Creative Computing student with a passion for web and software development, dedicated to building technology that’s both user-friendly and engaging. I have strong expertise in Python and C#, ensuring smooth performance on both server and client sides.
    </p>
  </section>

  <section>
    <h2>Skills</h2>
    <ul>
      <li>
        <strong>Web Development:</strong> I’m skilled in HTML, CSS, Bootstrap, JavaScript, PHP, MySQL, Laravel, and the MERN stack, striving to create responsive websites that work well for everyone.
      </li>
      <li>
        <strong>Software Engineering:</strong> With proficiency in Python and C#, I focus on developing robust and maintainable software.
      </li>
      <li>
        <strong>Design &amp; User Experience:</strong> I put a strong emphasis on user experience, using tools like Figma to design inviting and visually appealing digital spaces.
      </li>
      <li>
        <strong>Cloud Solutions &amp; Networking:</strong> Experienced with Amazon Web Services, I build reliable cloud infrastructures backed by a solid understanding of networking.
      </li>
      <li>
        <strong>Data Visualization:</strong> I’m adept at turning data into clear, insightful narratives using R Studio, Tableau, and QlikView.
      </li>
    </ul>
  </section>

  <section>
    <h2>What I'm Doing</h2>
    <p>
      I'm currently interning at the UCD Center for Cybersecurity and Cyber-Crime Investigation, where I work on projects designed for law enforcement agencies. During my internship, I’ve taken the lead on designing and developing the entire front-end for a major project, collaborating closely with the back-end team.
    </p>
    <p>
      In addition, I’m the sole developer on an exciting proof-of-concept project. This project not only pushes the envelope of innovation but also serves as an opportunity to introduce my fellow developers to Node and React, ensuring they can take the reins once my internship concludes.
    </p>
  </section>

  <section>
    <h2>Get in Touch</h2>
    <p>
      If you're looking for someone who is passionate about accessible and innovative technology, I'd love to connect. Feel free to reach out through the contact page on this site.
    </p>
  </section>
		</div>
	);
};

export default About;
