import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
	return (
		<div className="prose mx-auto">
			<h1>Privacy Policy.</h1>
			<p>Last updated: February 25, 2025 </p>
			<p>
				This Privacy Policy describes how your personal information is
				collected, used, and shared when you visit
				https://www.connormattless.com (the “Site”) or any sub-domain thereof.
			</p>

			<h2>Personal Information I Collect.</h2>

			<p>
				No personal information is collected on this site.
			</p>
			

			<h2>How Do I Use Your Personal Information?</h2>
			<p>
				I use the Contact Information that I collect to communicate with you
				only.
			</p>
			
			<h2>Do Not Track.</h2>
			<p>
				Please note that I do not alter my Site’s data behaviour and use
				practices when I see a Do Not Track signal from your browser.
			</p>
			<h2>Your Rights.</h2>
			<p>
				If you are a European resident, you have the right to access personal
				information I hold about you and to ask that your personal information
				be corrected, updated, or deleted. If you would like to exercise this
				right, please contact me through the contact information below.
			</p>
			<p>
				Additionally, if you are a European resident I note that I am processing
				your information in order to contact you (for example if you fill out a
				contact form through the Site), or otherwise to pursue my legitimate
				business interests listed above. Additionally, please note that your
				information might be transferred outside of Europe, including the United
				States.
			</p>
			<h2>Data Retention.</h2>
			<p>
				When you contact me through the Site, I will maintain your Contact
				Information for my records unless and until you ask me to delete this
				information.
			</p>
			<h2>Changes.</h2>
			<p>
				I may update this privacy policy from time to time in order to reflect,
				for example, changes to my practices or for other operational, legal or
				regulatory reasons.
			</p>
			<h2>Contact Me.</h2>
			<p>
				For more information about my privacy practices, if you have questions,
				or if you would like to make a complaint, please contact me through the
				contact form <Link to="/contact">here</Link>.
			</p>
		</div>
	);
};

export default PrivacyPolicy;
