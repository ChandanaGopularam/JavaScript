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
import React , {useState}from 'react';
import Child from './Components/Child';
const Parent=()=>{
  const[message , setMessage]=useState('Hello World');
  const changeMessage=()=>{
    setMessage("You clicked the button")
  };
  return(
    <div>
      <h1>{message}</h1>
      {/*passing the change message function as a prop to the child */}
      <Child changeMessage={changeMessage}/>
    </div>
  )
}
export default Parent;