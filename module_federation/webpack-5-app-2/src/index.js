import helloWorld from './hello-world';
import('HelloWorldApp/HelloWorldButton')
  .then(helloWorldButtonModule => {
    const HelloWorldButton = helloWorldButtonModule.default;
    const button = HelloWorldButton.getInstance();
    button.render();
  });

helloWorld();
