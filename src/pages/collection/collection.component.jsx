import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.style.scss';

const CollectionPage = ({ match }) => {
	console.log(match.params.collectionId);
	return (
		<div className="collection-page">
			<h2>Collections Page</h2>
		</div>
	);
};

export default CollectionPage;
