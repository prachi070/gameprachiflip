import img1_easy from './images/burgerking.avif';
import img3_easy from './images/domino.avif';
import img4_easy from './images/kfc.avif';
import img5_easy from './images/wowmomo.avif';
import img6_easy from './images/arsalan.avif';
import img7_easy from './images/pizzahut.png'

const imageData_easy = [
  { src: img1_easy, alt: 'Image 1' },
  { src: img3_easy, alt: 'Image 2' },
  { src: img7_easy, alt: 'Image 3' },
  { src: img4_easy, alt: 'Image 4' },
  { src: img5_easy, alt: 'Image 5' },
  { src: img6_easy, alt: 'Image 6' },
];

const getImagePairs_easy = () => {
    const list = [];
    for (let i = 0; i < imageData_easy.length; i++) {
      list.push(imageData_easy[i]);
      list.push(imageData_easy[i]);
    }
    return list.sort(() => Math.random() - 0.5); // Shuffle the cards
};

export { getImagePairs_easy };
