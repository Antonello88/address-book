import styles from './index.module.scss'
import {useState} from 'react'
import EntryForm from '../EntryForm'



function EntryList (addEntryForm) {
    
    return (
        <table>
            <thead>
                <tr>
                    <th> Nome</th>
                    <th> Cognome </th>
                    <th> Numero</th>

                </tr>

            </thead>

            <tbody>
            {addEntryForm && addEntryForm.map((entry) => (
                <tr>
                    <td>{entry.inputName}</td>
                    <td>{entry.inputSurname}</td>
                    <td>{entry.inputNum}</td>

                </tr>
            ))}




            
            </tbody>

        </table>
    )




}

export default EntryList 