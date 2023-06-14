import "./CustomButton.css";

const CustomButton = ({ title, classname, href }) => {
	return (
		<a href={`#${href}`}
			className={`custom-button ${classname}`}
		>
			{title}
		</a>
	);
};

export default CustomButton;
