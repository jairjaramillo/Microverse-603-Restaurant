import './style.css';
import Background from './pic/bg.jpg';

const main = () => {
  const bg = new Image();
  bg.src = Background;

  const jumbo = document.createElement('div');
  jumbo.class = 'jumbotron text-center bg';
  jumbo.innerHTML = `
    <h1>Cafe Plaza</h1>
    <p>Cafe - Food - Ambient</p>
  `;

  return jumbo;
};

document.getElementById('content').appendChild(main());
