import React from 'react'

function Bottom() {

    const customStyles = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        textAlign: 'center'
    };

  return (
    <>
      <div className=" bg-slate-400  " style={customStyles}>
            <button className=''>Add</button>
        </div>
    </>
  )
}

export default Bottom