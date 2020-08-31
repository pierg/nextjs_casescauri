import ImageGallery from 'react-image-gallery';

import violetta from "./photos/violetta"
import chalet from "./photos/chalet"
import limoni from "./photos/limoni"


const MyGallery = (props) => {
    console.log(props.name)

    switch (props.name) {
        case 'violetta':
            return (
                <>
                    <ImageGallery
                        items={violetta}
                        showFullscreenButton={false}
                        showPlayButton={false}
                    />
                </>
            );

        case "limoni":
            return (
                <>
                    <ImageGallery
                        items={limoni}
                        showFullscreenButton={false}
                        showPlayButton={false}
                    />
                </>
            );

        case "chalet":
            return (
                <>
                    <ImageGallery
                        items={chalet}
                        showFullscreenButton={false}
                        showPlayButton={false}
                    />
                </>
            );

        default:
            return (
                <>
                    <ImageGallery
                        items={chalet}
                        showFullscreenButton={false}
                        showPlayButton={false}
                    />
                </>
            );
    }
};


export default MyGallery