
const FeedbackList = ({ list,deletefeedback ,edit}) => {
  return (
    <div>
      <div>
        {list.map((f, index) => (
          <div className="card" key={index}>
            <button onClick={() => deletefeedback(f.id)}
            className="close">x</button>
            <button  onClick={() => edit(f)}
            className="edit">E</button>
            <h3 className="num-display">{f.rating}</h3>
            <p> {f.text} {f.id} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackList;
