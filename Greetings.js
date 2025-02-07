import React from "react";
// function Greetings({isLoggedIn}){
//     if(isLoggedIn){
//         return <h1>Welcome User</h1>
//     }else {
//         return <h1>Please Login</h1>
//     }
// }
const fruitList=()=>{
    const fruits = ['kiwi','berry','banana','guava'];
    return(
      <div>
        <h1>Fruits List</h1>
        <ul>
          {fruits.map((fruits,index)=>(
            <li key = {index}>{fruits}</li>
          ))}
        </ul>
      </div>
    )
}
export default fruitList;