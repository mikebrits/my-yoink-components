import * as React from 'react';
import './Heading.css';

export default function Heading({ children }: { children: React.ReactNode }) {
	return <h1 className="heading">{children}</h1>;
}
