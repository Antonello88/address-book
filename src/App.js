import { useState } from 'react';
import './App.css';
import EntryForm from './EntryForm';
import EntryList from './EntryList';
import SearchInput from './SearchInput';


function App() {

  const [contactInfo, setContactInfo]=useState('');
  const [filterInput, setFilterInput] = useState('')

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
      <SearchInput filterInput={filterInput} setFilterInput={setFilterInput}/> 
      <EntryList contactInfo={contactInfo} filterInput={filterInput}/> 
      
    </div>
  );
}

export default App;
