import logo from './logo.svg';
import './App.css';
import StateTest01 from './StateTest';
import Ex01Con from './Contatiners/EX01Con';
import QuizContainal from './Contatiners/QuizContainal';
import Quiz02InOutCon from './Contatiners/Quiz02InOutCon';
import Ex02ArrCon from './Contatiners/Ex02ArrCon';
import Ex03ObjCon from './Contatiners/Ex03ObjCon';
import Ex04Con from './Contatiners/Ex04Con';
import Ex05Con from './Contatiners/Ex05Con';
import Quiz03storeCon from './Contatiners/Quiz03StoreCon';

function App() {
  return (
   <>
   <Ex03ObjCon/>
   <hr/>
   <Ex02ArrCon/>
   <hr/>
  <Quiz02InOutCon/>
   <hr/>
   <QuizContainal/>
   <hr/>
    <Ex01Con/>
   <hr/>
    <StateTest01/>
   <hr/>
    <Ex04Con/>
    <hr/>
    <Ex05Con/>
    <hr/>
    <Quiz03storeCon/>
    </>
  );
}

export default App;
