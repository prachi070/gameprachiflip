import spider from './images_hard/spider.jpg'
import pumpkin from './images_hard/pumpkin.avif'
import christmas from './images_hard/christmas.png'
import butterfly from './images_hard/butterfly.jpg'
import pikachu from './images_hard/pikachu.png'
import burger from './images_hard/burger.jpg'
import fries from './images_hard/fries.jpg'
import watermelon from './images_hard/watermelon.jpg'
import car from './images_hard/car.avif'
import house from './images_hard/house.jpg'
export const getImagePairs_hard = () => {
    const images = [
        { src: spider, alt: 'Image 1' },
        { src: pumpkin, alt: 'Image 2' },
        { src: christmas, alt: 'Image 3' },
        { src: butterfly, alt: 'Image 4' },
        { src: pikachu, alt: 'Image 5' },
        { src: burger, alt: 'Image 6' },
        { src: fries, alt: 'Image 7' },
        { src: watermelon, alt: 'Image 8' },
        { src: car, alt: 'Image 9' },
        { src: house, alt: 'Image 10' },
    ];

    // Duplicate the images to create pairs
    const imagePairs = images.concat(images);

    return imagePairs;
};
