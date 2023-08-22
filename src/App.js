import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {incrementValue, decrementValue} from "./actions/index"
function App() {
  const myState = useSelector((state) => {
    return state.changeValue;
  });
  const dispatch = useDispatch();
  return (
    <>
    <h1>Learn Redux</h1>   
    <button onClick={() => dispatch(decrementValue())}>Decrement</button>   
    <p>{myState}</p>
    <button onClick={() => dispatch(incrementValue(5))}>Increment</button>   
    </>
  )
}

export default App
