import helloWorld from '../hello-world';
import HelloWorldButton from '../components/hello_world_button/HelloButton';

class HelloWorldPage {
  render() {
    helloWorld();
    const button = HelloWorldButton.getInstance();
    button.render();
  }
}

export default HelloWorldPage;
