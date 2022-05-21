import styles from './index.module.scss'
import {useState} from 'react'
import EntryForm from '../EntryForm'


function EntryList ({contactInfo}) {

    

    return (
        <div>
            <ul>
            {contactInfo && contactInfo.map((user,index) => 
            (<li key={index}> 
            <h4>{user.name}</h4>
            <h4>{user.surname}</h4>
            <h4>{user.number}</h4>
            
            
            </li>))}

            </ul>
        </div>
    )




}

export default EntryList 