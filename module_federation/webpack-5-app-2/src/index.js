import helloWorld from './hello-world';
import('HelloWorldApp/HelloWorldButton')
  .then(helloWorldButtonModule => {
    const HelloWorldButton = helloWorldButtonModule.default;
    const btn = new HelloWorldButton();
    btn.render();
  });

helloWorld();
