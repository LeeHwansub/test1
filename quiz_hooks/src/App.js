import logo from './logo.svg';
import './App.css';
import HeaderCom from './components/common/HeaderCom';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import MListPage from './pages/member/MListPage';
import MOnePage from './pages/member/MOnePage';
import NotFound from './components/common/NotFound';
import MDeletePage from './pages/member/MDeletePage';
import MSignupPage from './pages/member/MSignupPage';
import MUpdatePage from './pages/member/MUpdatePage';

function App() {
  return (
    <Routes>
    <Route path="/" element={<HeaderCom/>}>
    <Route path="/" element={<IndexPage/>}/>
    <Route path="/member">
    <Route path="list" element={<MListPage/>}/>
    <Route path="one" element={<MOnePage/>}/>
    <Route path="delete/:id" element={<MDeletePage/>}/>
    <Route path="signup" element={<MSignupPage/>}/>
    <Route path="update/:id" element={<MUpdatePage/>}/>
    </Route>
    </Route>
    <Route path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
