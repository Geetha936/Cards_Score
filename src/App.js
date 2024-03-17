import './App.css';
import './css/Styles.css';
import { HomePage } from './components/Homepage/Homepage';
import { DetailsPage } from './components/DetailsPage/DetailsPage';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { CalculatePage } from './components/CalculationPage/CalculationPage';
import { ScorePage } from './components/ScorePage/ScorePage';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' exact element={<HomePage/>}/>
      <Route path="/details" element={<DetailsPage/>} />  
      <Route path='/calc' element={<CalculatePage />} />
      <Route path='/Score' element={<ScorePage/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
