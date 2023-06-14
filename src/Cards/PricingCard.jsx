import React, { useRef, useEffect } from "react";
import "./PricingCard.css";
import { CustomButton } from "../Customs";

import animations from "../animations";
import { motion, useAnimation, useInView } from "framer-motion";

const PricingCard = ({ packageProps, index }) => {
	const { title, price, properties } = packageProps;

	const ref = useRef(null);
	const isInView = useInView(ref);
	const mainControls = useAnimation();

	useEffect(() => {
		console.log(isInView);
		if (isInView) {
			mainControls.start("animate");
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isInView]);

	return (
		<motion.div
			ref={ref}
			variants={animations.pricingCard}
			initial="initial"
			animate={mainControls}
			className="pricing-card"
		>
			<div className="overlay">#{index}</div>
			<h2>{title}</h2>
			<div className="pricing-card-price">
				<p>$</p>
				<h6>{price}</h6>
			</div>
			<span className="line"></span>
			<div className="properties-list">
				{Object.values(properties).map((prop, index) => (
					<p key={index}>{prop}</p>
				))}
			</div>
			<CustomButton
				id="contact"
				title="PURCHASE NOW"
				classname="purchase-button"
			/>
		</motion.div>
	);
};

export default PricingCard;
