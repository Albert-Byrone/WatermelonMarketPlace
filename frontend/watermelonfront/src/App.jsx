import './App.css';
import { Results } from './components/Results';
import {Survey} from './components/Survey';
import { BrowserRouter as Router, Route, Link, Routes  } from "react-router-dom";


function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route  exact path='/' element={<Survey />} />
        <Route  exact path='/results' element={<Results />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
