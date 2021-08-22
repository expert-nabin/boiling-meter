import './App.css';
import TemperatureInputInCelsius from './components/TemperatureInputInCelsius';
import TemperatureInputInFahrenheit from './components/TemperatureInputInFahrenheit';
import BoilingResult from './components/BoilingResult';

function App() {
  return (
    <div className="app">
      <h1>Boiling Meter</h1>
      <TemperatureInputInCelsius />
      <TemperatureInputInFahrenheit />
      <BoilingResult/>
    </div>
  );
}

export default App;
