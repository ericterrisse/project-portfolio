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
	heroBlobs: {
		initial: {
			scale: .5,
		},
		animate: {
			scale: 1,
			transition: {
				ease: "easeInOut",
				duration: 0.5,
				delay: 0.5,
				type: "spring",
				stiffness: 200,
				damping: 20,
			},
		},
	},
	content: {
		initial: {
			x: -100,
			opacity: 0,
		},
		animate: {
			x: 0,
			opacity: 1,
			transition: {
				ease: "easeInOut",
				duration: 0.5,
				delay: 0.25,
				type: "spring",
			},
		},
	},
	imageCard: {
		hidden: { x: -200, opacity: 0 },
		visible: (i) => ({
			x: 0,
			opacity: 1,
			transition: {
				delay: i * 0.2,
				ease: "easeInOut",
				duration: 0.5,
				type: "spring",
				stiffness: 200,
				damping: 20,
			},
		}),
	},
};
