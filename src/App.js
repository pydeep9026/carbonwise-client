import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/store/home/home';








function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    </>
  );
}
export default App;



