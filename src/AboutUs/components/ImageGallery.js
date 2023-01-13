import React from 'react';

import './ImageGallery.css';
function ImageGallery(props) {
    const { title, image_content, images } = props;
    return (
        <div className='images-container'>
            <h2 className="images-title">{title}</h2>
            <div className='images-wrapper'>
                {images.map(image => <img src={image.image} alt='image_gallery' />)}
                <div className="image-content">
                    <p className="image-content-desc">{image_content}</p>
                </div>
            </div>
        </div>
    );
}

export default ImageGallery;