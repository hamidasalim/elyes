import React, { useState } from 'react'

export const Event = () => {
    var [nb , setNb] = useState(0) // var nb = 0 
    var [x , setX] = useState(0)
    const incrementer = ()=>{
        setNb(nb+1)
        console.log(nb)
    }
    const add = (x)=>{
        setNb(nb+x)
    }
    const add_enter = (e)=>{
        console.log(e)
        if(e.keyCode == 13){
            var x = +e.target.value
            setNb(nb+x)
        }
    }
  return (
    <div>
        <h4>{nb}</h4>
        {/* executer une fonction sans paramétres */}
        <button onClick={incrementer}>+</button> &nbsp;
         <button onClick={()=>setNb(nb-1)}>-</button> <br/>

  {/* executer une fonction avec paramétres */}
        <button onClick={()=>add(5)}>Add 5</button> &nbsp; <button>Add 10</button> &nbsp; <button>Add 50</button><br></br>
       {/* e : event - click/change... 
       e.target : element html 
       e.target.nom_propriete , exp : e.target.value
       */}
        <input type="number" onChange={(e)=>setX(e.target.value)} ></input> 
        <button onClick={()=>add(+x)}>Add </button>
        <br></br>
        <input onKeyUp={(e)=>add_enter(e)}></input>
    </div>
  )
}
