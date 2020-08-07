import React from 'react';
import loader from '../../Images/spinner.gif'

const Spinner = () => {
    return ( 
    <div>
        <img 
        src={loader} 
        alt='loading'
        style={{ margin:'auto', display:'block', width:'200px'}}></img>
    </div> );
}
 
export default Spinner;