import CustomButton from "./CustomButton";
import "./Hero.css";

import { BsArrowDownShort } from "react-icons/bs";

const Hero = () => {
	return (
		<div className="hero-background">
			<div className="hero-section">
				<header className="hero-header">
					<h1>ET</h1>
					<nav className="hero-nav">
						<a href="#packages">PACKAGES</a>
						<a href="#projects">PROJECTS</a>
						<a href="#about">ABOUT</a>
					</nav>
					<CustomButton
						href="contact"
						title="LET'S CREATE YOUR IDEA"
						classname="hero-header-button"
					/>
				</header>
				<div className="hero-text">
					<h1>Hi, I'm Eric Terrisse</h1>
					<p>
						I am a developer. Together, we can create from a simple
						portfolio, to your project idea.
					</p>
					<CustomButton
						href="projects"
						title="CHECK MY WORK"
						classname="hero-text-button"
					/>
					<BsArrowDownShort className="arrow-down" />
				</div>
			</div>
		</div>
	);
};

export default Hero;
