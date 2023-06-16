import "./About.css";
import { desk } from "../assets";
import { BsArrowUpRight } from "react-icons/bs";

const About = () => {
	return (
		<div className="about-section">
			<div className="about-container">
				<img src={desk} alt="desk" />
				<span className="background-square"></span>
				<div className="about-text">
					<a href="/" className="about-curriculum">
						<h6>Curriculum</h6>
						<span target="_blank">
							<BsArrowUpRight />
						</span>
					</a>
					<h1>A bit about me</h1>
					<p>
						I am a Junior Computer Science student from Barcelona
						studying in Lindenwood, USA. <br /> I have been coding
						for 5 years now in a wide variety of projects. From
						simple Hello World! to real world webapps used daily. I
						have worked alone and with teams in all kinds of roles.{" "}
						<br /> I am very outgoing and ready to take on new
						challenges, this has led me to teaching and mentoring
						python based projects at my high school as well as
						joining hackathons with a team. These years of learning
						have resulted in two main branches; web development and
						algorithm designing.
						<br /> These two skills have been the base for
						discovering my passion, coding solutions for people's
						problems. I enjoy coming up with creative ideas to solve
						different issues. <br /> When I am offline, I have been
						a roller hockey player for 11 years and I have played
						the piano since I was 4, among a lot of other activities
						I love doing. I have studied abroad multiple times and I
						love to travel, this has forged my social personality
						and ability to adapt.
						<br /> I look forward getting to know you and get to
						solutions for your problems through code.
						<br /> Let's <a href="#contact">get in touch</a>!
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
