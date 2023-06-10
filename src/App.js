import './App.css';
import HelloFunctionalComponent from './Component/HelloFunctionalComponent';
// import DemonStateClass from './Component/DemoStateClassComponent';
// import HelloClassComponent from './Component/HelloClassComponent';


import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default App;
