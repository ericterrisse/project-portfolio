import "./Projects.css";
import { BsArrowUpRight } from "react-icons/bs";

const ProjectCard = ({ project }) => {
    const { name, title, text, images, link } = project;
	return (
		<div className="project-card">
			<div className="project-text">
				<div className="project-text-header">
					<h6>{name}</h6>
					<a href={`${link}`} target="_blank">
						<BsArrowUpRight />
					</a>
				</div>
				<h2>{title}</h2>
				<p>{text}</p>
			</div>
			<div className="project-images">
				{Object.values(images).map((image, index) => (
					<img key={index} className={`image${index+1}`} src={image} alt="image" />
				))}
			</div>
		</div>
	);
};

export default ProjectCard;
