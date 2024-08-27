import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import PackOne from './PackOne';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<PackOne />} />
      </Routes>
    </div>
  );
}

export default App;
