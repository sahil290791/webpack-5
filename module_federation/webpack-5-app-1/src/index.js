import helloWorld from './hello-world';
import HelloWorldButton from './components/hello_world_button/HelloButton';

helloWorld();
const button = HelloWorldButton.getInstance();
button.render();
