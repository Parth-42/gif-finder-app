import React, { useState } from 'react'
import Axios from 'axios'


const Search = ({ getQuery }) => {

    const [text, setText] = useState('');

    const onChange = (q) => {   // q as in QUERY
        setText(q);
        getQuery(q);
    }


    return (
        <div>
            <form>
                <input placeholder="Search a GIF..." type="text" value={text} onChange={(e) => onChange(e.target.value)}></input>
            </form>
        </div>
    )
}

export default Search
