import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_fgvta1j", "template_gcoui2i", form.current, {
				publicKey: "_bx0ifzp7kVfpy8QF",
			})
			.then(
				() => {
					console.log("SUCCESS!");
				},
				(error) => {
					console.log("FAILED...", error.text);
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
