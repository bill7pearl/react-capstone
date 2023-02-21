import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
