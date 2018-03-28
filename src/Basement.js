import React from 'react';
import Contacts from './Contacts';
import BasementMenu from './BasementMenu';
import Blog from './Blog';

const Basement = () => (
	<section className="basement">
		<Contacts />
		<BasementMenu />
		<Blog />
	</section>
)

export default Basement;