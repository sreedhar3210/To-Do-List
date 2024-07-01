import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Puzzles from './pages/Puzzles';
import Books from './pages/Books';
import Movies from './pages/Movies';
import WebSeries from './pages/WebSeries';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<Home />} />
          <Route path='/puzzles' element={<Puzzles />} />
          <Route path='/books' element={<Books />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/webseries' element={<WebSeries />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
