import "./Slider.css";
import { AiFillHtml5 } from "react-icons/ai";
import {
	TbBrandNextjs,
	TbBrandJavascript,
	TbBrandVscode,
} from "react-icons/tb";
import {
	SiPhp,
	SiMysql,
	SiAdobephotoshop,
	SiCplusplus,
	SiTailwindcss,
} from "react-icons/si";
import { IoLogoPython } from "react-icons/io";
import { DiCss3, DiJava, DiReact } from "react-icons/di";

const Slider = () => {
	return (
		<div id="about" className="slider">
			<div className="slide-track">
				<div className="slide">
					<AiFillHtml5 size={80} />
					<p>HTML5</p>
				</div>
				<div className="slide">
					<SiTailwindcss size={80} />
					<p>Tailwind</p>
				</div>
				<div className="slide">
					<DiCss3 size={80} />
					<p>CSS3</p>
				</div>
				<div className="slide">
					<DiReact size={80} />
					<p>React</p>
				</div>
				<div className="slide">
					<DiJava size={80} />
					<p>Java</p>
				</div>
				<div className="slide">
					<SiCplusplus size={80} />
					<p>C++</p>
				</div>
				<div className="slide">
					<TbBrandNextjs size={80} />
					<p>Nextjs</p>
				</div>
				<div className="slide">
					<TbBrandJavascript size={80} />
					<p>Javascript</p>
				</div>
				<div className="slide">
					<TbBrandVscode size={80} />
					<p>VSCode</p>
				</div>
				<div className="slide">
					<SiPhp size={80} />
					<p>PHP</p>
				</div>
				<div className="slide">
					<SiMysql size={80} />
					<p>MySQL</p>
				</div>
				<div className="slide">
					<SiAdobephotoshop size={80} />
					<p>Photoshop</p>
				</div>
				<div className="slide">
					<IoLogoPython size={80} />
					<p>Python</p>
				</div>

				{/* SAME */}

				<div className="slide">
					<AiFillHtml5 size={80} />
					<p>HTML5</p>
				</div>
				<div className="slide">
					<SiTailwindcss size={80} />
					<p>Tailwind</p>
				</div>
				<div className="slide">
					<DiCss3 size={80} />
					<p>CSS3</p>
				</div>
				<div className="slide">
					<DiReact size={80} />
					<p>React</p>
				</div>
				<div className="slide">
					<DiJava size={80} />
					<p>Java</p>
				</div>
				<div className="slide">
					<SiCplusplus size={80} />
					<p>C++</p>
				</div>
				<div className="slide">
					<TbBrandNextjs size={80} />
					<p>Nextjs</p>
				</div>
				<div className="slide">
					<TbBrandJavascript size={80} />
					<p>Javascript</p>
				</div>
				<div className="slide">
					<TbBrandVscode size={80} />
					<p>VSCode</p>
				</div>
				<div className="slide">
					<SiPhp size={80} />
					<p>PHP</p>
				</div>
				<div className="slide">
					<SiMysql size={80} />
					<p>MySQL</p>
				</div>
				<div className="slide">
					<SiAdobephotoshop size={80} />
					<p>Photoshop</p>
				</div>
				<div className="slide">
					<IoLogoPython size={80} />
					<p>Python</p>
				</div>
			</div>
		</div>
	);
};

export default Slider;
