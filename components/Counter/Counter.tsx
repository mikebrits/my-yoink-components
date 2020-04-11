import * as React from 'react';
import './Counter.css';

export default function Counter({initialCount = 0} : {initialCount?: number}) {
	const [count, setCount] = React.useState(parseInt(initialCount + "", 10));
	return (
		<>
			<h3 className="counter__heading">Count: {count}</h3>
			<button
			className="counter__button"
				onClick={() => {
					setCount(count + 1);
				}}
			>
				+
			</button>
            <button
				className="counter__button"
				onClick={() => {
					setCount(count - 1);
				}}
			>
				-
			</button>
		</>
	);
}
