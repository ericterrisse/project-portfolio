import "./Pricing.css";
import { PricingCard } from "./";

const packages = [
	{
		title: "PERSONAL",
		price: 150,
		properties: {
			0: "3 pages design",
			1: "3 color palette",
			2: "2 corrections",
			3: "Help setting up domain",
		},
	},
	{
		title: "CEO",
		price: 300,
		properties: {
			0: "5 pages design",
			1: "6 color palette",
			2: "Accept payments",
			3: "Direct contact",
		},
	},
	{
		title: "COORDINATOR",
		price: 1200,
		properties: {
			0: "Control dashboard",
			1: "7 workers",
			2: "Direct contact",
			3: "Web dashboard + webapp",
		},
	},
];

const Pricing = () => {
	return (
		<div id="packages" className="pricing-section">
			<h1>SELECT YOUR PACKAGE</h1>
			<p>Choose the package that best suits you, click to read more</p>
			<div className="pricing-cards">
				{packages.map((packageProps, index) => (
					<PricingCard key={index} packageProps={packageProps} index={index+1} />
				))}
			</div>
		</div>
	);
};

export default Pricing;
