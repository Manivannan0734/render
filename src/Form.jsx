import React from 'react'
import './Form.css'
const Form = () => {
  return (
    <div className='form-container' >
        <div className='form' >
            firstName : <input id='fname' type="text" />
            LastName : <input id='lname' type="text" /><br />
            emailid : <input id='eamil' type="email" />
            <button formAction='post' type="submit"></button>
        </div>

    </div>
  )
}

export default Form