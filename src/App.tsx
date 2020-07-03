import React, { useState } from "react";
import { useNonInitialEffect } from "./use-non-initial-effect-hook";

function App() {
	const [press, setPress] = useState(false);
	const [pressed, setPressed] = useState(false);

	/**
	 * Increment the counter every time toggle changes.
	 */
    useNonInitialEffect(() => {
		setPressed(true);
	}, [press]);

	return (
		<div>
			<h2 data-testid="pressed">
				{pressed ? "The button has been pressed!" : "The button has not been pressed!"}
			</h2>
			<button
				onClick={() => {
					setPress(!press);
				}}
				data-testid="button"
			>
				Click!
			</button>
		</div>
	);
}

export default App;
