
import './App.css';
import Test from './Test'
import {Test2} from './Test'
// const obj={
//name1: "raunak pratap"
//}

function App() {
  const name= "raunak pratap";
  const roll= 19;
  function add(){
    console.log("raunak pratap");
    
  }
  return (
    <div id='abc'>
      gaurav raj is learning reactjs
      <Test2  name1={name} roll1 = {roll}/>
      <Test name1={name} roll1={roll} add1={add}/>
    </div>
  );
}

export default App;
