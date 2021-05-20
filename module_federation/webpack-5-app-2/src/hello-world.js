import bikeImg from './assets/images/myNextRide.jpeg';

function helloWorld() {
  console.log('Hello world 2 App!');
  const body = document.querySelector('body');
  body.innerHTML = '';
  const div = document.createElement('div');
  div.innerHTML = '<h1>Application which consumes Hello button from App 1</h1>'
  body.appendChild(div);
  const img = document.createElement('img');
  img.style.width = '400px';
  img.style.height = 'auto';
  img.src = bikeImg;
  img.alt = 'bike-image';

  body.appendChild(img);
}

export default helloWorld;