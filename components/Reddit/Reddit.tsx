import React, { useEffect, useState } from 'react';
import "./Reddit.css";

export default ({ page = 'hot' }: { page?: 'hot' | 'new' }) => {
	const [posts, setPosts] = useState<any>(null);

	useEffect(() => {
		fetch(`https://www.reddit.com/${page}.json`)
			.then((data) => data.json())
			.then((data) => setPosts(data));
	}, []);

	if (!posts) return <div>Loading...</div>

	return (
		<div>
			<h3>Reddit Posts</h3>
            <ul className="reddit__post-list">
                {
                    posts && posts.data.children.map((item: any, index: number) => (
                    <li key={index}>{item.data.title}</li>
                    ))
                }
            </ul>
		</div>
	);
};
