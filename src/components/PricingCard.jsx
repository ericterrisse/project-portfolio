import React from "react";
import "./PricingCard.css";
import { CustomButton } from "./";

const PricingCard = ({ packageProps, index }) => {
	const { title, price, properties } = packageProps;
	return (
		<div className="pricing-card">
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
		</div>
	);
};

export default PricingCard;
