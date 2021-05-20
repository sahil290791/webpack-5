import helloWorld from '../hello-world';
import Heading from './heading/heading';

class App2Page {
  render() {
    const body = document.querySelector('body');
    body.innerHTML = '';
    const heading = new Heading();
    heading.render('App 2');
    helloWorld();
  }
}

export default App2Page;