import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Preview from '../../components/preview-collection/preview.component';
import { selectCollections } from '../../redux/shop/shop.selectors';
import './collection-overview.scss';

const CollectionOverview = ({ collections }) => {
	return (
		<div className="collections-overview">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<Preview key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionOverview);
