import React from 'react';
import ImageGallery from 'react-image-gallery';


function Thumbnails(props) {
    return (
        <ImageGallery
            items={props.images}
            showNav={false}
            showFullscreenButton={false}
            showPlayButton={false}
            disableThumbnailScroll={false}
        />
    );
}

export default Thumbnails;