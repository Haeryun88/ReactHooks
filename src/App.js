import React, { useEffect, useState, useRef } from 'react';

const App = () => {
  //   const [count, setCount] = useState(0);
  //   const countRef = useRef(0);

  //   console.log(countRef); //countRef.current

  //   const increaseCountState = () => {
  //     setCount(count + 1);
  //   };

  //   const increaseCountRef = () => {
  //     countRef.current = countRef.current + 1;
  //   };

  const inputRef = useRef();

  useEffect (()=>{
    inputRef.current.focus()
  },[]);


  
  const login = () => {
  console.log(inputRef.current.value);

    alert(`환영합니다. ${inputRef.current.value}님`);
  };
  return (
    <div>
      <input ref={inputRef} placeholder="name" />
      <button onClick={login}>Ref 올려</button>
    </div>
  );
};

export default App;
