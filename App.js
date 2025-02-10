import React,{useState} from 'react';
//counter component
// const Counter=()=>{
//   const[count,setCount]=useState(0);
//   return(
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count+1)}>Increment</button>
//       <button onClick={()=>setCount(count-1)}>Decrement</button>
//     </div>
//   )
// }
// export default Counter;

const ThemeToggler=()=>{
  const[theme,setTheme]=useState('light')
  const togglerTheme=()=>{
    setTheme(prevTheme=>(prevTheme=='light'?'dark':'light'))
  }
  return(
    <div style={{backgroundColor:theme=='light'?'white':'black',color:theme=='light'?'black':'white',textAlign:'center'}}>
      <h1> The Current Theme is {theme}</h1>
      <button onClick={togglerTheme}>togglerTheme</button>

    </div>
  )
}
export default ThemeToggler;