import "./CustomButton.css";
import { motion } from "framer-motion";

const CustomButton = ({ title, classname, href }) => {
	return (
		<motion.a
			initial={{ opacity: 0.6 }}
			whileHover={{
				scale: 1.1,
				transition: { duration: 0.5 },
			}}
			whileTap={{ scale: 0.9 }}
			whileInView={{ opacity: 1 }}
			href={`#${href}`}
			className={`custom-button ${classname}`}
		>
			{title}
		</motion.a>
	);
};

export default CustomButton;
