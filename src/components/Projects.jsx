import "./Projects.css";
import { ProjectCard } from "../Cards";
import {
	appati,
	frontalpati,
	pativela,
	students,
	xproof_app,
	xproof_web,
} from "../assets";

import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";
import {CustomTitle} from "../Customs";

const projects = [
	{
		name: "Appati",
		title: "Tool created to support a local sport: Pati Vela and monitor the regattas",
		text: "A sailor and programmer from the Barcelona sailing club and I develop this tool to improve the way the regattas were being saved and displayed to the sailors.",
		images: {
			0: frontalpati,
			1: pativela,
			2: appati,
		},
		link: "https://appati.pativelabarcelona.com/",
	},
	{
		name: "Xproof",
		title: "Tool created to to revolutionize the education system from the practicality",
		text: "We are a team of three passioned programmers working towards a better experience in the school both for the professor and the student.",
		images: {
			0: xproof_web,
			1: students,
			2: xproof_app,
		},
		link: "https://xproof.io/",
	},
];

const Projects = () => {
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
		<div ref={ref} id="projects" className="projects-section">
			<CustomTitle
				title={"SOME OF MY PREVIOUS WORK & PROJECTS"}
				subtitle={
					"Click on the name to read more, click on the arrow to see the product"
				}
				isInView={isInView}
				refProp={ref}
			/>
			<div id="projects" className="projects-container">
				{projects.map((proj, index) => (
					<ProjectCard
						key={index}
						project={proj}
						isInView={isInView}
					/>
				))}
			</div>
		</div>
	);
};

export default Projects;
