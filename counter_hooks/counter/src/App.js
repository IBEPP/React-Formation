import React, { useState } from 'react';

export default function App () {
  // useState("salut")
  let [count, setCount] = useState(0);
  console.log(useState(count));

  const decrement = (() => {
    decrement()
  })

  // const increment = (() => {

  // })

  return(
    <div>
      <h1> Counter </h1>
      <h2> {count} </h2>
      <button onClick={ () => setCount(count - 1)} style={{backgroundColor: "red"}}> - </button>
      <button onClick={ () => setCount(count + 1)} style={{backgroundColor: "green"}}> + </button>
    </div>
  )
  
}
