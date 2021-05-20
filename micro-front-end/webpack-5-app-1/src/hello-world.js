import bikeImg from './assets/images/myNextRide.jpeg';

function helloWorld() {
  const body = document.querySelector('body');
  const img = document.createElement('img');
  img.style.width = '400px';
  img.style.height = 'auto';
  img.src = bikeImg;
  img.alt = 'bike-image';

  body.appendChild(img);
}

export default helloWorld;