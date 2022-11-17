import "./feedback.css";
import React, { useState } from "react";
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import Stats from "./components/Stats";
import FeedbackList from "./components/FeedbackList";

export const Feedback = () => {
  const send = (e, feed) => {
    e.preventDefault();
    console.log("send work",feed);
if(feed.id)
{
  //meth1
  //setList(list.map(l=>(l.id!==feed.id)?l:feed));
  //meth2
  let p = list.findIndex(l=>(l.id==feed.id))
  let nlist=list
  nlist[p]=feed
  setList([...nlist])
}else{
  setList([{...feed, id: list.length>0? list[0].id+1 : 1}, ...list]);
}

console.log(list);
  };

  const [list, setList] = useState([]);
  const deletefeedback =(id)=>{
    setList(list.filter((el)=>el.id != id))

  }
  const [editedFeed,editFeed]= useState({})
  const edit = (Feedback)=>{
    editFeed(Feedback)
    console.log(editedFeed)
  }

  return (
    <div>
      <Header></Header>

      <div className="container">
        <FeedbackForm send={send} editedFeed={editedFeed} />
        <Stats></Stats>
        <FeedbackList list={list} deletefeedback={deletefeedback} edit={edit} />
      </div>
    </div>
  );
};
