import './App.css';
import { WelcomePage } from './components/WelcomePage';

function App() {
  return (
    <div className="App">
      <WelcomePage message="Hello To My World" itemPrice="250" itemName='Bike' />
    </div>
  );
}

export default App;
