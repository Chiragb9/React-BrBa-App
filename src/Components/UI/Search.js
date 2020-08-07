import React, { useState } from 'react';

const Search = ({getQuery}) => {
    const [text, setText] = useState('')
    const searchHandler = (e) =>{
        setText(e)
        getQuery(e)
    }
    return ( 
    <section className='search'>
        <form>
            <input
            className='form-control'
            placeholder='Search characters here'
            type='text'
            value={text}
            onChange={e=>searchHandler(e.target.value)}
            />
        </form>
    </section> );
}
 
export default Search;