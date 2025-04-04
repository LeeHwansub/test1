import IndexPage from './pages/IndexPage';
import ListPage from './pages/ListPage';
import LoginPage from './pages/LoginPage';
import RegPage from './pages/RegPage';
import './App.css';
import HeaderCon from './containers/HeaderCon';
import {Route,Routes} from "react-router-dom"
import OnePage from './pages/OnePage';


function App() {
  return (
    <Routes>
    <Route path="/" element={<HeaderCon/>}>
      <Route path="/" element={<IndexPage/>}/>      
      <Route path='/member/'>
      <Route path="list" element={<ListPage/>}/>
      <Route path="login" element={<LoginPage/>}/>
      <Route path="register" element={<RegPage/>}/>
      <Route path="one" element={<OnePage/>}/>
      <Route path="delete/:id" element={<MDeletePage/>}/>
      <Route path="update/:id" element={<MUpdatePage/>}/>
      </Route>
      </Route>
    </Routes>

  );
}

export default App;
