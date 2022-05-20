import styles from './index.module.scss'
import {useState} from 'react'

function EntryForm ({addEntryForm}) {

    const [inputName, setInputName] = useState ('');
    const [inputSurname, setInputSurname] = useState ('');
    const [inputNum, setInputNum] = useState ('');

    const handleSubmit = (e) => {
        e.prevent.default()
        addEntryForm({inputName, inputSurname, inputNum})
        
    }


    return (
        <form className='form' onSubmit={handleSubmit}>
        <input type='text' name='inputName' placeholder='Nome' value={inputName} onChange={(e) => setInputName (e.target.value)} />
        <input type='text' name='inputSurname' placeholder='Cognome' value={inputSurname} onChange={(e) => setInputSurname (e.target.value)} />
        <input type='text' name='inputNum' placeholder='Numero' value={inputNum} onChange={(e) => setInputNum (e.target.value)} />

        <input type="submit" value="Aggiungi"/>
        </form>
    )


}

export default EntryForm