import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App(props) {
  var username=props.username;
   var time=new Date();
   console.log(time.getHours() + " Greater than " +   props.visitingTime);
  if(props.name == username && props.visitingTime >= time.getHours()){ 
  return (
    <div className="App">
     <b>Welcome to MS </b>{props.firstName} &nbsp;{props.lastname}
    </div>
  );
  }
  else{
    return( <center><div><b> Please contact administartor.  </b>
    </div></center>
    );
   
  }
}

export default App;