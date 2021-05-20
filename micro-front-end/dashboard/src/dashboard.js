const url = window.location.pathname;

const button = document.createElement('button');
if (url === '/page-1') {
  import('HelloWorld1App/HelloWorldPage1')
    .then(HelloWorldPageAppModule => {
      const MODULE = HelloWorldPageAppModule.default;
      const page = new MODULE();
      button.addEventListener('click', () => {
        window.location.href = '/page-2';
      }); 
      button.textContent = 'Go To Page 2';
      page.render();
      document.querySelector('body').appendChild(button);
    });
} else {
  import('HelloWorld2App/HelloWorldPage2')
    .then(HelloWorldPageAppModule => {
      const MODULE = HelloWorldPageAppModule.default;
      const page = new MODULE();
      button.addEventListener('click', () => {
        window.location.href = '/page-1';
      }); 
      button.textContent = 'Go To Page 1';
      page.render();
      document.querySelector('body').appendChild(button);
    });
}
