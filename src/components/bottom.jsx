import { borderRadius } from '@mui/system';
import React from 'react'

function Bottom() {

    const customStyles = {
        
        color: 'white',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
    };

    const buttonStyles = {
        backgroundColor: '#007bff',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        marginRight: '10px', 
    };

  return (
    <>
        <div className="sticky bottom-0"  style={{ backgroundColor: 'white', padding: '10px', textAlign: 'center', borderRadius: '30px'}}>
            <button style={buttonStyles}>Button 1</button>
            <button style={{ ...buttonStyles, backgroundColor: '#007bff' }}>Button 2</button>
            <button style={{ ...buttonStyles, backgroundColor: '#007bff' }}>Button 3</button>
            <button style={{ ...buttonStyles, backgroundColor: '#007bff' }}>Button 4</button>
        </div>
    </>
  )
}

export default Bottom