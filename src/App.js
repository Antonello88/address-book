
import './App.css';
import EntryForm from './EntryForm';
import EntryList from './EntryList';

function App() {

  return (
    <div className="App">
      <EntryForm addEntryForm={addEntryForm}/>
      <EntryList  addEntryForm={addEntryForm}/> 
    </div>
  );
}

export default App;
