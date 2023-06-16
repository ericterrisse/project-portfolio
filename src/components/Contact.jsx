import "./Contact.css";
import "../Customs/CustomButton.css";
import { CustomTitle } from "../Customs";
import animations from "../animations";

import { useEffect } from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { motion, useInView, useAnimation } from "framer-motion";

const Contact = () => {
	const ref = useRef(null);
	const isInView = useInView(ref);
	const mainControls = useAnimation();

	useEffect(() => {
		console.log(isInView);
		if (isInView) {
			mainControls.start("animate");
		}
		if (!isInView) {
			mainControls.start("initial");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isInView]);

	const {
		register,
		trigger,
		formState: { errors },
	} = useForm();

	const onSubmit = async (e) => {
		const isValid = await trigger();
		if (!isValid) {
			e.preventDefault();
		}
	};

	return (
		<div ref={ref} id="contact" className="contact-section">
			<CustomTitle
				title={"CONTACT ME VIA EMAIL OR MESSAGE"}
				subtitle={""}
				isInView={isInView}
			/>
			<div className="wrapper">
				<p>Sit down, relax, and let's discuss your</p>
				<div className="words">
					<span>goals</span>
					<span>objectives</span>
					<span>ideas</span>
					<span>dreams</span>
					<span>goals</span>
				</div>
			</div>
			<motion.div
				className="contact-card"
				variants={animations.fromScaleZero}
				initial="initial"
				animate={mainControls}
			>
				<div className="contact-info">
					<div className="contact-info-phone">
						<AiOutlineWhatsApp size={40} />
						<div className="phones">
							<p>+34 611 474 090</p>
							<p>+1 (636) 219 7684</p>
						</div>
					</div>
					<div className="contact-info-email">
						<MdEmail size={40} />
						<p>contact@ericterrisse.com</p>
					</div>
					<div className="contact-info-location">
						<HiLocationMarker size={40} />
						<div className="locations">
							<p>Saint Louis, USA</p>
							<p>Barcelona, CAT</p>
						</div>
					</div>
				</div>
				<form
					target="_blank"
					onSubmit={onSubmit}
					action="https://formsubmit.co/5f81b26a81be1cf3948af600f35e8721"
					method="POST"
				>
					<input
						type="text"
						placeholder="NAME"
						{...register("name", {
							required: true,
							maxLength: 100,
						})}
					/>
					{errors.name && (
						<p>
							{errors.name.type === "required" &&
								"This field is required."}
							{errors.name.type === "maxLength" &&
								"Max length is 100 character."}
						</p>
					)}

					<input
						type="text"
						placeholder="EMAIL"
						{...register("email", {
							required: true,
							pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
						})}
					/>
					{errors.email && (
						<p>
							{errors.email.type === "required" &&
								"This field is required."}
							{errors.email.type === "pattern" &&
								"Invalid email address."}
						</p>
					)}

					<textarea
						rows={4}
						cols={50}
						placeholder="MESSAGE"
						{...register("message", {
							required: true,
							maxLength: 2000,
						})}
					/>
					{errors.message && (
						<p>
							{errors.message.type === "required" &&
								"This field is required."}
							{errors.message.type === "maxLength" &&
								"Max length is 2000 character."}
						</p>
					)}

					<motion.button
						initial={{ opacity: 0.6 }}
						whileHover={{
							scale: 1.1,
							transition: { duration: 0.5 },
						}}
						whileTap={{ scale: 0.9 }}
						whileInView={{ opacity: 1 }}
						className="custom-button"
						type="submit"
					>
						SEND
					</motion.button>
				</form>
			</motion.div>
		</div>
	);
};

export default Contact;
