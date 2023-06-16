import "./CustomTitle.css";
import animations from "../animations";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const CustomTitle = ({ title, subtitle, isInView }) => {
	const mainControls = useAnimation();

	useEffect(() => {
		console.log(isInView);
		if (isInView) {
			mainControls.start("animate");
		}
		if (!isInView) {
			mainControls.start("initial");
		}
	}, [isInView]);

	return (
		<div className="custom-title">
			<motion.h1
				variants={animations.title}
				initial="initial"
				animate={mainControls}
			>
				{title}
			</motion.h1>
			{subtitle !== "" && (
				<motion.p
					variants={animations.fromScaleZero}
					initial="initial"
					animate={mainControls}
				>
					{subtitle}
				</motion.p>
			)}
		</div>
	);
};

export default CustomTitle;
