import "./Projects.css";
import { ProjectCard } from "../Cards";
import {
	appati,
	frontalpati,
	pativela,
	students,
	xproof_app,
	xproof_web,
	desktopHoqueiApp,
	mobileHoqueiApp,
	hoqueiImage,
	foto_xavi,
	frontal_adipav,
	app_adipav,
} from "../assets";

import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";
import { CustomTitle } from "../Customs";

const projects = [
	{
		name: "L'app de L'Hoquei",
		title: "Tool developed to showcase information for Rink Hockey leagues",
		text: "App developed to display matches, tableboards and statistics about the amateur and professional leagues of Rink Hockey in Catalonia and Spain.",
		images: {
			0: desktopHoqueiApp,
			1: hoqueiImage,
			2: mobileHoqueiApp,
		},
		link: "https://hoqueiapp.vercel.app/",
	},
	{
		name: "Appati",
		title:
			"Tool created to support a local sport: Pati Vela and monitor the regattas",
		text: "A sailor and programmer from the Barcelona sailing club and I develop this tool to improve the way the regattas were being saved and displayed to the sailors.",
		images: {
			0: frontalpati,
			1: pativela,
			2: appati,
		},
		link: "https://appati.pativelabarcelona.com/",
	},
	{
		name: "Carnet ADIPAV",
		title:
			"Tool created to support ADIPAV: the organization that manages the Pati Vela clubs",
		text: "Continuing with the Pati Vela projects, after talking with the organization that manages the Pati Vela clubs, we developed a software to manage the regattas and competitions around Europe.",
		images: {
			0: foto_xavi,
			1: frontal_adipav,
			2: app_adipav,
		},
		link: "https://carnet.adipav.org/",
	},
	{
		name: "Xproof",
		title:
			"Tool created to revolutionize the education system from the practicality",
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
					<ProjectCard key={index} project={proj} isInView={isInView} />
				))}
			</div>
		</div>
	);
};

export default Projects;
