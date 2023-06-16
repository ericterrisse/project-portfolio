import "./Pricing.css";
import { PricingCard } from "../Cards";
import {CustomTitle} from "../Customs";

import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";

const packages = [
	{
		title: "PERSONAL",
		price: 400,
		properties: {
			0: "3 pages design",
			1: "3 color palette",
			2: "2 corrections",
			3: "Help setting up domain",
		},
	},
	{
		title: "CEO",
		price: 700,
		properties: {
			0: "5 pages design",
			1: "6 color palette",
			2: "Accept payments",
			3: "Direct contact",
		},
	},
	{
		title: "COORDINATOR",
		price: 3500,
		properties: {
			0: "Control dashboard",
			1: "7 workers",
			2: "Direct contact",
			3: "Web dashboard + webapp",
		},
	},
];

const Pricing = () => {
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

	return (
		<div ref={ref} id="packages" className="pricing-section">
			<CustomTitle
				title={"PACKAGES"}
				subtitle={
					"Click to read more, PURCHASE NOW to message me"
				}
				isInView={isInView}
			/>
			<div className="pricing-cards">
				{packages.map((packageProps, index) => (
					<PricingCard
						key={index}
						packageProps={packageProps}
						index={index + 1}
					/>
				))}
			</div>
		</div>
	);
};

export default Pricing;
