import { useState } from 'react';
import './App.css';
import EntryForm from './EntryForm';
import EntryList from './EntryList';


function App() {

  const [contactInfo, setContactInfo]=useState('');

  const userData = (inputName,inputSurname,inputNum) => {
    const contacts = {
      name: inputName,
      surname: inputSurname,
      number: inputNum,
    }
    setContactInfo([contacts,...contactInfo])
  } 


  return (
    <div className="App">

      <EntryForm  userData={userData}/>
      <EntryList contactInfo={contactInfo}/> 
      
    </div>
  );
}

export default App;
