const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = [
  'pic1.jpg',
  'pic2.jpg',
  'pic3.jpg',
  'pic4.jpg',
  'pic5.jpg'
];

/* Declaring the alternative text for each image file */
const altTexts = {
  'pic1.jpg': 'Close up of an eye',
  'pic2.jpg': 'Close up of a shell',
  'pic3.jpg': 'Some white flowers in a garden of blue ones',
  'pic4.jpg': 'Egyptian painting of pharaoh',
  'pic5.jpg': 'A brown butterfly sitting on an leaf'
};

/* Looping through images */
for (const filename of imageFilenames) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${filename}`);
  newImage.setAttribute('alt', altTexts[filename]);
  thumbBar.appendChild(newImage);
}

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
