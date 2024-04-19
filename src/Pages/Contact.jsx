import React, { useRef, useState } from "react";
import { redirect } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const form = useRef();
	const [message, setMessage] = useState("");
	const [formErrors, setFormErrors] = useState({});

	const validateForm = () => {
		let errors = {};
		let formIsValid = true;

		const name = form.current["name"].value;
		if (!name) {
			formIsValid = false;
			errors["name"] = "Name is required.";
		}

		const email = form.current["email"].value;
		if (!email) {
			formIsValid = false;
			errors["email"] = "Email is required.";
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			formIsValid = false;
			errors["email"] = "Email is invalid.";
		}

		

		const message = form.current["message"].value;
		if (!message) {
			formIsValid = false;
			errors["message"] = "Message is required.";
		}

		setFormErrors(errors);
		return formIsValid;
	};

	const sendEmail = (e) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		emailjs
			.sendForm("service_fgvta1j", "template_gcoui2i", form.current, {
				publicKey: "_bx0ifzp7kVfpy8QF",
			})
			.then(
				() => {
					setMessage("Email sent successfully!");

					form.current.reset();
					setTimeout(() => {
						setMessage("");
					}, 5000);
				},
				(error) => {
					let errors = {};
					form.current.reset();
					errors["network"] = error.text;
					setFormErrors(errors);
				}
			);
	};

	return (
		<>
			<main className="container max-w-7xl mx-auto my-5 prose ">
				<section className=" py-48 bg-primary rounded-2xl p-5">
					<header>
						<div className="text-center">
							<h1 className="text-primary-content mb-2">Contact Me.</h1>

							<form
								ref={form}
								onSubmit={sendEmail}
								className="form-group flex flex-col gap-2  mx-auto max-w-sm "
							>
								<input
									type="name"
									name="name"
									placeholder="Enter name"
									className="input  mask input-bordered w-full form-item"
									aria-label="Enter name"
									aria-required="true"
								/>
								<input
									type="email"
									name="email"
									placeholder="Enter email address"
									className="input  mask input-bordered w-full form-item"
									aria-label="Enter email address"
									aria-required="true"
								/>

								<textarea
									name="message"
									className="textarea  mask textarea-bordered form-item w-full "
									placeholder="Let me know what you have to say!"
									aria-label="Message"
									aria-required="true"
								></textarea>

								<button
									type="submit"
									value="Send"
									className="btn  mask btn-neutral w-full"
								>
									Submit
								</button>
								{message && (
									<div className="toast toast-right">
										<div className="alert alert-success">
											<span>{message}</span>
										</div>
									</div>
								)}
								{console.log(Object.values(formErrors))}

								{Object.values(formErrors)?.map((error, i) => (
										<div key={i} className="alert alert-error">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												className="stroke-primary-content shrink-0 w-6 h-6 "
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
												></path>
											</svg>
											<span>{error}</span>
										</div>
								))}
							</form>
						</div>

						<div className="bubble hidden sm:block"></div>
						<div className="triangle"></div>
					</header>
				</section>
			</main>
		</>
	);
};

export default Contact;
