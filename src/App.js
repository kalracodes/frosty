import Olaf from "./Olaf.png";
import "./App.css";

function App() {
	return (
		<div className="App">
			<img src={Olaf} alt="" />
			<div className="content">
				<div className="Heading">Frosty</div>
				<div className="para">
					Check what do you need before you go out??
				</div>
      <button className="btn">Click to check</button>
			</div>
		</div>
	);
}

export default App;
