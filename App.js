// import React,{useReducer} from 'react';
// function appleRducer(state=3,action){
//   switch(action.type){
//     case 'ADD_APPLE':
//       return state+1;
//     case 'EAT_APPLE':
//       return state-1;
//     default:
//       return state;
//   }
// }
// function App(){
//   const [state,dispatch]=useReducer(appleRducer);
//   return(
//     <div className='a' style={{padding:'20px',textAlign:'center'}}>
//       <h1 style={{color:'red'}}>Apple Counter</h1>
//       <p style={{color:'black'}}>Number of Apples:{state}</p>
//       <button onClick={()=>dispatch({type:'ADD_APPLE'})}  style={{
//           backgroundColor: 'green',
//           color: 'white',
//           padding: '10px 20px',
//           margin: '10px',
//           border: 'none',
//           borderRadius: '20px',
//           cursor: 'pointer',
//         }}>ADD APPLE</button><br></br>
//       <button onClick={()=>dispatch({type:'EAT_APPLE'})}  style={{
//           backgroundColor: 'green',
//           color: 'white',
//           padding: '10px 20px',
//           margin: '10px',
//           border: 'none',
//           borderRadius: '20px',
//           cursor: 'pointer',
//         }}>EAT APPLE</button>
//     </div>
//   )
// }
// export default App;
//--------------------------------------------------------------------------------
// import React , {useState}from 'react';
// import Child from './Components/Child';
// const Parent=()=>{
//   const[message , setMessage]=useState('Hello World');
//   const changeMessage=()=>{
//     setMessage("You clicked the button")
//   };
//   return(
//     <div>
//       <h1>{message}</h1>
//       {/*passing the change message function as a prop to the child */}
//       <Child changeMessage={changeMessage}/>
//     </div>
//   )
// }
// export default Parent;
//---------------------------------------------------------------------------------------
// import React, { useReducer } from 'react';
// (Reducer function to track the number of apples)
// function appleReducer(state = 3, action) {
//   switch (action.type) {
//     case 'ADD_APPLE':
//       return state + 1;
//     case 'Eat_APPLE':
//       return state - 1;
//     default:
//       return state;
//   }
// }
// function App() {
//   const [count, dispatch] = useReducer(appleReducer, 3);
//   return (
//     <div style={{ textAlign: 'center', padding: '50px', fontSize: '20px', margin: 'auto', width: '50%', borderRadius: '10px', marginTop: '50px' }}>
//       {Array.from({ length: count }).map((_, index) => (
//         <img key={index} src={require('./apple.jpg')} alt='Apple' style={{ width: '100px', height: '100px', margin: '5px', borderRadius: '10px' }} />
//       ))}
//       <h1>Apple Counter</h1>
//       <p>Number of apples: {count}</p>
//       <button
//         style={{ margin: '10px', padding: '10px 20px', fontSize: '16px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }}
//         onClick={() => dispatch({ type: 'ADD_APPLE' })}
//       >
//         Add Apple
//       </button>
//       <button
//         style={{ margin: '10px', padding: '10px 20px', fontSize: '16px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}
//         onClick={() => dispatch({ type: 'Eat_APPLE' })}
//       >
//         Eat Apple
//       </button>
//     </div>
//   );
// }
// export default App;
//-------------------------------------------------------------------------------------------
import React, {useState, useEffect, useRef} from 'react';
function CounterWithPrev(){
    const [count, setCount] = useState(0);
    const prevCount = useRef();
    //(create a ref to store the previous value)
    useEffect(()=>{
        prevCount.current = count;
    }, [count])
    return(
        <div>
            <p>Current Counter: {count}</p>
            <p>prevCount: {prevCount.current}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}
export default CounterWithPrev;