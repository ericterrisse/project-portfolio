import "./Hero.css";
import animations from "../animations";
import { motion } from "framer-motion";
import { CustomButton } from "../Customs";

import { BsArrowDownShort } from "react-icons/bs";

const Hero = () => {
	return (
		<div className="hero-background">
			<div className="hero-section">
				<motion.header
					className="hero-header"
					variants={animations.heroNavbar}
					initial="initial"
					animate="animate"
				>
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
				</motion.header>
				<motion.div
					className="hero-text"
					variants={animations.heroContent}
					initial="initial"
					animate="animate"
				>
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
				</motion.div>
			</div>
		</div>
	);
};

export default Hero;
