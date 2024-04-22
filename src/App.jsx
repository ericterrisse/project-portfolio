import { Hero, Pricing, Projects, About, Contact } from "./components";
import { Slider } from "./Customs";

const App = () => {
	return (
		<div>
			<Hero />
			<Projects />
			<Slider />
			<About />
			<Contact />
		</div>
	);
};

export default App;
