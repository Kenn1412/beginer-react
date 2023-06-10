import './App.css';
import HelloFunctionalComponent from './Component/HelloFunctionalComponent';
// import DemonStateClass from './Component/DemoStateClassComponent';
// import HelloClassComponent from './Component/HelloClassComponent';

function App() {
  return (
    <div className="App">
      {/* <HelloClassComponent/> */}
      {/* <DemonStateClass /> */}
      <HelloFunctionalComponent name="Hung"/>
    </div>
  );
}

export default App;
