import { useState } from "react";
import QuizCom from "../../componets/form/QuizCom";

const init = [
    { key: 1, label: `10대`, isChecked: false },
    { key: 2, label: `20대`, isChecked: false },
    { key: 3, label: `30대`, isChecked: false },
  ];
  
  function QuizCon() {
    const [age, setAge] = useState(init);
  
    const onCheckAge = (key) => {
        const updateAge = age.map((item) => ({
          ...item,
          isChecked: item.key === key,
        }));
        setAge(updateAge);
      };
  
    const submit = (e) => {
      e.preventDefault();
      const selected = age.find((a) => a.isChecked);
      console.log("submit :", age);
    };
  
    return <QuizCom submit={submit} onCheckAge={onCheckAge} age={age} />;
  }
  
  export default QuizCon;