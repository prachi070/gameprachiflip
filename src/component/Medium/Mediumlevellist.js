
import cow from "./images_medium/cow.jpg"
import panda from "./images_medium/panda.jpg"
import squ from "./images_medium/squ.jpg"
import fox from "./images_medium/fox.jpeg"
import monkey from "./images_medium/monkey.jpg"
import lion from "./images_medium/lion.jpeg"
import penga from "./images_medium/penga.jpeg"
import cat from "./images_medium/cat.png"

export const getImagePairs_medium = () => {
    const images = [
        { src: cow, alt: 'Image1' },
        { src: panda, alt: 'Image 2' },
        { src: squ, alt: 'Image 3' },
        { src: fox, alt: 'Image 4' },
        { src: monkey, alt: 'Image 5' },
        { src: lion, alt: 'Image 6' },
        { src: penga, alt: 'Image 7' },
        { src: cat, alt: 'Image 8' },
    ];

    // Duplicate the images to create pairs
    const imagePairs = images.concat(images);

    return imagePairs;
};
