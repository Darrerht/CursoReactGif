import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExtertApp = () => {

	const [categories, setCategories] = useState([
		'Kimetsu no Yaiba',
	]);
	return (
		<>
			<h2>Gif Expert App</h2>
			<hr />
            <AddCategory setCategories={ setCategories }/>
			<ol>
				{categories.map((category) => (
                    <GifGrid key={category} category={category}/>
                ))}
			</ol>
		</>
	);
};
