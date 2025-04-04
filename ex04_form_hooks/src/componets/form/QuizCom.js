function QuizCom({ submit, onCheckAge, age }) {
    return (
      <form onSubmit={submit}>
        {age &&
          age.map((item) => (
            <span key={item.key} style={{ marginRight: "10px" }}>
              <label htmlFor={item.key}>{item.label}</label>
              <input
                id={item.key}
                type="radio"
                name="age"
                checked={item.isChecked}
                onChange={() => onCheckAge(item.key)}
              />
            </span>
          ))}
        <br />
        <button type="submit">클릭</button>
      </form>
    );
  }
  
  export default QuizCom;