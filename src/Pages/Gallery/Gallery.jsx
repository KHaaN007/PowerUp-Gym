import { useEffect } from "react";
import { useState } from "react";

const Gallery = () => {

    const [images, setImages] = useState([])

    useEffect(() => {
        fetch('./gallery.json')
            .then(res => res.json())
            .then(data => setImages(data))
    }, [])



    return (
        <div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {
                    images.map(image => <div key={image.id}>
                        <img className="h-96 w-screen rounded-lg" src={image.url} alt="" />
                    </div>)
                }
            </div>
        </div>
    );
};

export default Gallery;