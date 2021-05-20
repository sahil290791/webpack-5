import helloWorld from '../hello-world';
import HelloWorldButton from './hello_world_button/HelloButton';
import Heading from './heading/heading';

class HelloWorldPage {
  render() {
    const body = document.querySelector('body');
    body.innerHTML = '';
    const heading = new Heading();
    heading.render('App 1');
    helloWorld();
    const button = HelloWorldButton.getInstance();
    button.render();
  }
}

export default HelloWorldPage;
