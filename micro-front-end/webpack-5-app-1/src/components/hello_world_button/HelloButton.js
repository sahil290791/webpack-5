import './hello-world-button.scss';

class HelloButton {
  buttonCssClass = 'hello-world-button';
  static instance;

  static getInstance() {
    if (!this.instance) {
      this.instance = new HelloButton();
    }
    return this.instance;
  }

  render() {
      const button = document.createElement('button');
      const body = document.querySelector('body');
      button.innerHTML = 'Hello world';
      button.onclick = function () {
          const p = document.createElement('p');
          p.innerHTML = 'Hello world';
          p.classList.add('hello-world-text');
          body.appendChild(p);
      }
      button.classList.add('hello-world-button');
      body.appendChild(button);
  }
}

export default HelloButton;