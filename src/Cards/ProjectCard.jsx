import "../components/Projects.css";
import { BsArrowUpRight } from "react-icons/bs";
import animations from "../animations";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const ProjectCard = ({ project, isInView }) => {
	const { name, title, text, images, link } = project;
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
		<div className="project-card">
			<motion.div
				variants={animations.projectText}
				initial="initial"
				animate={mainControls}
				className="project-text"
			>
				<div className="project-text-header">
					<h6>{name}</h6>
					<a href={`${link}`} target="_blank">
						<BsArrowUpRight />
					</a>
				</div>
				<h2>{title}</h2>
				<p>{text}</p>
			</motion.div>
			<motion.div
				variants={animations.projectImg}
				initial="initial"
				animate={mainControls}
				className="project-images"
			>
				{Object.values(images).map((image, index) => (
					<img
						key={index}
						className={`image${index + 1}`}
						src={image}
						alt="image"
					/>
				))}
			</motion.div>
		</div>
	);
};

export default ProjectCard;
