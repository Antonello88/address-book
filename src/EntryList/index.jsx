import styles from './index.module.scss'
import {useState} from 'react'
import EntryForm from '../EntryForm'


function EntryList ({contactInfo, filterInput}) {

    

    return (
        <div>

            <ul>
            {contactInfo && contactInfo.filter((item) => 
            item.name.toLowerCase().includes(filterInput.toLowerCase()) || item.surname.toLowerCase().includes(filterInput.toLowerCase()))
            .map((user,index) => 
            (<li key={index}> 
                <h5>{user.name}</h5>
                <h5>{user.surname}</h5>
                <h5>{user.number}</h5>
            </li>))}
            </ul>
        </div>
    )
}

export default EntryList 