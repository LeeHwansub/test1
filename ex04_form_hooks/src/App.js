import logo from './logo.svg';
import './App.css';
import Input01Con from './containers/form/Input01Con';
import CheckBox02Com, { CheckBoxComponent } from './componets/form/ChckBox02Com';
import QuizCon from './containers/form/QuizCon';
import UserRef04Con from './containers/form/UserRef04Con';
import UserRef03Con from './containers/form/UserRef03Con';

function App() {
  return (
<>
<Input01Con/><hr/>
<CheckBox02Com/>
<CheckBoxComponent/><hr/>
<QuizCon/><hr/>
<UserRef03Con/><hr/>
<UserRef04Con/><hr/>
</>
  );
}

export default App;
