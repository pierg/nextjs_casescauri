import React, { useState } from 'react';
import ReactBnbGallery from 'react-bnb-gallery';

import violetta from "./photos/violetta"
import chalet from "./photos/chalet"
import limoni from "./photos/limoni"


const Bgallery = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    console.log(props.name)

    switch(props.name) {
        case 'violetta':  // if (x === 'value1')
            return (
                <>
                    <button onClick={() => setIsOpen(true)}>
                        Open gallery
                    </button>
                    <ReactBnbGallery
                        show={isOpen}
                        photos={violetta}
                        onClose={() => setIsOpen(false)}
                    />
                </>
            );
        case 'chalet':  // if (x === 'value2')
            return (
                <>
                    <button onClick={() => setIsOpen(true)}>
                        Open gallery
                    </button>
                    <ReactBnbGallery
                        show={isOpen}
                        photos={chalet}
                        onClose={() => setIsOpen(false)}
                    />
                </>
            );

        case 'limoni':
            return (
                <>
                    <button onClick={() => setIsOpen(true)}>
                        Open gallery
                    </button>
                    <ReactBnbGallery
                        show={isOpen}
                        photos={limoni}
                        onClose={() => setIsOpen(false)}
                    />
                </>
            );
        default:
            return (
                <>
                    <button onClick={() => setIsOpen(true)}>
                        Open gallery
                    </button>
                    <ReactBnbGallery
                        show={isOpen}
                        photos={violetta}
                        onClose={() => setIsOpen(false)}
                    />
                </>
            );
    }
};


export default Bgallery