import './App.css';

import IndexCon from './containers/IndexCon';
import LoginCon from './containers/LoginCon';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<IndexCon/>}/>
      <Route path="/login" element={<LoginCon/>}/>
    </Routes>
    </>
  );
}

export default App;
