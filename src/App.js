
import './App.css';
import Navbar from './components/Navbar';
import { Student } from './components/Student';

function App() {
  return (
   <div classname="App">
    {/* <Navbar/> */}
    <Student name="Monisha" age={22} isMarried={false}/>
   <Student name="Monisha" age={22} isMarried={false}/>
   </div>
  );
}

export default App;
