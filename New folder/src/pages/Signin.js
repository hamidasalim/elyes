import React, { useState } from 'react'

export const Signin = () => {
    const [email , setEmail] = useState('');
    const [pwd , setPwd] = useState('');

    const handleSubmit = ()=>{
        const form = {email  , password: pwd}
        console.log(form)
    }
  return (
    <div>
        <h2>Sign IN</h2>
       <div className='col-md-4'>
        <input placeholder='email' onChange={(e)=>setEmail(e.target.value)} className='form-control'></input>
        <br></br>
        <input placeholder='password' onChange={(e)=>setPwd(e.target.value)}  className='form-control' type="password"></input>
        <br></br>
        <button className='btn btn-primary' onClick={handleSubmit}>Submit</button>
       </div>
    </div>
  )
}
