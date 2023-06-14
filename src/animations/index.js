export default {
	heroNavbar: {
		initial: {
			y: -100,
			opacity: .5,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				ease: "easeInOut",
				duration: 1,
				type: "spring",
			},
		},
	},
	heroContent: {
		initial: {
			y: -100,
			opacity: 0,
			scale: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			scale: 1,
			transition: {
				ease: "easeInOut",
				duration: 1,
				type: "spring",
			},
		},
	},
	title: {
		initial: {
			y: -50,
			opacity: 0,
		},
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				ease: "easeInOut",
				duration: 0.5,
				delay: 0.25,
				type: "spring",
			},
		},
	},
	projectText: {
		initial: {
			x: -700,
			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				ease: "easeInOut",
				duration: 0.5,
				type: "spring",
			},
		},
	},
	projectImg: {
		initial: {
			x: 700,
			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				ease: "easeInOut",
				duration: 0.5,
				type: "spring",
			},
		},
	},
	fromScaleZero: {
		initial: {
			scale: 0,
			opacity: 0,
		},
		animate: {
			scale: 1,
			opacity: 1,
			transition: {
				ease: "easeInOut",
				duration: 0.5,
				type: "spring",
			},
		},
	},
};
