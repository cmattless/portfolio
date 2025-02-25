import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
	return (
		<div className="prose mx-auto">
			<h1>Privacy Policy.</h1>
			<p>Last updated: November 16, 2023</p>
			<p>
				This Privacy Policy describes how your personal information is
				collected, used, and shared when you visit
				https://www.connormattless.com (the “Site”) or any sub-domain thereof.
			</p>

			<h2>Personal Information I Collect.</h2>

			<p>
				When you visit the Site, I automatically collect certain information
				about your device, including information about your Ib browser, IP
				address, time zone, and some of the cookies that are installed on your
				device. Additionally, as you browse the Site, I collect information
				about the individual Ib pages that you view, what Ibsites or search
				terms referred you to the Site, and information about how you interact
				with the Site. I refer to this automatically-collected information as
				“Device Information.”
			</p>
			<p>I collect Device Information using the following technologies:</p>
			<p>
				- “Cookies” are data files that are placed on your device or computer
				and often include an anonymous unique identifier. For more information
				about cookies, and how to disable cookies, visit
				http://www.allaboutcookies.org.
			</p>
			<p>
				- “Log files” track actions occurring on the Site, and collect data
				including your IP address, browser type, Internet service provider,
				referring/exit pages, and date/time stamps. - “Ib beacons,” “tags,” and
				“pixels” are electronic files used to record information about how you
				browse the Site.
			</p>
			<p>
				- “Log files” track actions occurring on the Site, and collect data
				including your IP address, browser type, Internet service provider,
				referring/exit pages, and date/time stamps. - “Ib beacons,” “tags,” and
				“pixels” are electronic files used to record information about how you
				browse the Site.
			</p>
			<p>
				When I talk about “Personal Information” in this Privacy Policy, I am
				talking both about Device Information and Contact Information.
			</p>

			<h2>How Do I Use Your Personal Information?</h2>
			<p>
				I use the Contact Information that I collect to communicate with you
				only.
			</p>
			<h2>Sharing Your Personal Information.</h2>
			<p>
				I share your Personal Information with third parties to help me use your
				Contact Information, as described above. I do not store any Contact
				Information on third party servers. I use https://www.emailjs.com/ along
				with Google Mail https://www.google.com/intl/en-GB/gmail/about/ to send
				the contents of the form to my emails to contact you.
			</p>
			<p>
				I also use Google Analytics to help me understand how my visitors use
				the Site--you can read more about how Google uses your Personal
				Information here: https://www.google.com/intl/en/policies/privacy/. You
				can also opt-out of Google Analytics here:
				https://tools.google.com/dlpage/gaoptout.
			</p>
			<p>
				Finally, I may also share your Personal Information to comply with
				applicable laws and regulations, to respond to a subpoena, search
				warrant or other lawful request for information I receive, or to
				otherwise protect my rights.
			</p>
			<h2>Do Not Track.</h2>
			<p>
				Please note that I do not alter my Site’s data collection and use
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
