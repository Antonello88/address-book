
import {useState} from 'react'
import styles from './index.module.scss'


function SearchInput ({filterInput, setFilterInput}) {


    return (
        <form>
            <input type='text' name='Search' placeholder='Search' value={filterInput} onChange={(e) => setFilterInput(e.target.value)} />
        </form>
    )

}

export default SearchInput