
import React,{useState,useEffect} from 'react'
import './App.css';
import UserData from './components/UserData'
const API="https://jsonplaceholder.typicode.com/users";
const App = () => {
  const[users,setUsers]=useState([]);
const fetchUsers=async()=>{
  try{
    const response=await fetch(API);
    if(!response.ok){
      throw new Error('networ response not ok')
    }
    const data=await response.json();
    console.log(data);
    setUsers(data);
  }
  catch(error){
console.log('error',error);
  }
}

  useEffect(()=>{
    fetchUsers(API);
  })
  return (
   
      <UserData users={users}/>
    
  )
}

export default App