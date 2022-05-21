import styles from './index.module.scss'
import {useState} from 'react'
import EntryForm from '../EntryForm'


function EntryList () {

    

    const [userData, setUserData] = useState([])
    

    return (
        <>
    

        <table>

            <thead>
                <tr>
                    <th> Nome</th>
                    <th> Cognome </th>
                    <th> Numero</th>

                </tr>

            </thead>

            <tbody>

            {userData && userData.map((user) => (
                <tr>
                    <td>{user.inputName}</td>
                    <td>{user.inputSurname}</td>
                    <td>{user.inputNum}</td>

                </tr>
            ))}




            
            </tbody>

        </table>

    
        </>
    )




}

export default EntryList 