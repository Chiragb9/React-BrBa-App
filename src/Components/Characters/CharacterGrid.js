import React from 'react';
import CharacterItem from './CharacterItem'
import Spinner from '../UI/Spinner';

const Char = ({isLoading, items}) => {
    return isLoading
     ? <Spinner />
     : <section className='cards'> 
        {items.map(item=>(
            <CharacterItem key={item.char_id} item={item}/>
        ))}
    </section>
}
 
export default Char;