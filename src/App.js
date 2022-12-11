import logo from './logo.svg';
import './App.css';

function App() {

  var lat=0
  var lon=0

  navigator.geolocation.getCurrentPosition(getValue);

  function getValue(position){
    lat = position.coords.latitude
    lon = position.coords.longitude;
  }


  


  return (
    <div className="App">
      Hi
    </div>
  );
}

export default App;
