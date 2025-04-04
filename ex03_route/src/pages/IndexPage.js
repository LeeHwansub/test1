import { useEffect, useState } from "react";

function IndexPage() {
  const [num, setNum] = useState(0);
  useEffect(()=>{
    console.log("IndexPage useEffect")
  },[num]);
  const onClick =() =>{
    setNum(num +1 );
  }
    return (
      <div>
          indexPage<br/>
      <button onClick={onClick}>IndexPage</button><br/>
      </div>
    );
  }
  export default IndexPage;