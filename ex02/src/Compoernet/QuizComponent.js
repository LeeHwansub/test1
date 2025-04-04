function QuizComponent({num, click, click2})
     {
  return (<>
  num : {num}   <br/>
    <button onClick={click}>+</button>
    <button onClick={click2}>-</button>
  </>
  );
}export default QuizComponent;