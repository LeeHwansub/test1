import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Nav from './Nav'; 
import Main from './Main';
import Ex01 from './ex01';
const click = () => {
  alert("test");
}
function App() {
  const num = 100;
  console.log("num: ", num);
  

  return (<>
  <Ex01 />
  {num === 100 ? "참" : "거짓"}
  {num === 101 && "참인경우 실행"}<br /> 
  num: {num}<br />
  <Header test="연습중" number={num}/><hr />
  <Nav name="홍길동" addr="산골짜기" /><hr />
  </>
 )

}
export default App;
