import React, { useState } from "react";
import data from "./data/data";

function App() {
	const [numPs, setNumPs] = useState("");
	const [text, setText] = useState([]);

	function handleChange(e) {
		setNumPs(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		setText(data.slice(0, numPs));
	}

	return (
		<div className="section-center">
			<h3>TIRED OF BORING LOREM IPSUM?</h3>
			<form className="lorem-form" onSubmit={handleSubmit}>
				<label htmlFor="paragraphs">Paragraphs:</label>
				<input
					type="text"
					id="paragraphs"
					value={numPs}
					onChange={handleChange}
				/>
			</form>
			{text.map((paragraph) => {
				return <p>{paragraph}</p>;
			})}
		</div>
	);
}

export default App;
