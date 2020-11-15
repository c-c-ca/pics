import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const imageList = props => {
    const images = props.images.map(({ id, ...image }) => (
        <ImageCard key={id} image={image} />
    ));

    return <div className="image-list">{images}</div>;
};

export default imageList;
