import './App.css';
import Router from './components/Router';
import Navigation from './components/Navigation';

import logo from './logo.svg';
const App = () => (
  <Router>
    <div className="App">
      <img src={logo} alt="logo" />
      <h1>Vite Template</h1>
      <Navigation />
    </div>
  </Router>
);

export default App;
