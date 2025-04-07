import "../styles/test.css";

function TestCom01() {
    const style = { color : 'blue', fontSize: '20px' };

    return (
      <>
  <div style={style}>
    <h2>TestCom01</h2>
    <p style={{color : "red", fontSize: "30px"}}>
      This is TestCom01 component.
    </p>
  </div>

  <div id="test" className="test">
    {console.log("test")}
    This is TestCom01 component.
  </div>

      
      </>

    );
  }
  export default TestCom01;