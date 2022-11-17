import React, { useState,useEffect } from 'react'

const FeedbackForm = ({send, editedFeed}) => {
    const [feed, setFeed] = useState({
        id:0,
        text: '',
        rating: 10
    })

    const handleValueClick=(name,e)=>{
        setFeed({...feed, [name]: e.target.value})
    }
    const values = [1,2,3,4,5,6,7,8,9,10];

    useEffect(() => {
        if(editedFeed.id)
        {
            setFeed(editedFeed)
        }
   
    }, [editedFeed]);

    
    
    
  return (
    <div className='card'>
    <h2>Leave your feedback</h2>

    <form>
        <ul className='rating'>
            {values.map((nb)=>{
                return (
                    <li key={nb}>
                    <input id={nb}  type="radio" name="rating" value={nb}
                    onClick={(e) =>handleValueClick('rating', e)}
                    checked={feed.rating==nb} />
                    <label htmlFor={nb}>  {nb}</label>
                </li>
                )
                
            })}
        </ul>
        <div className='input-group'>
            <input onChange={(e) => handleValueClick('text',e)}
            value={feed.text} />
            <button onClick={(e) => {send(e,feed); setFeed({text:'',rating:0})}} className="btn btn-secondary"  >send</button>
        </div>
    </form>
</div>
  )
}

export default FeedbackForm