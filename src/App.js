import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import GameDetails from './components/Details';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:gameName" element={<GameDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
