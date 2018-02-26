import React from 'react'
import TodoList from "./Components/TodoTask-Component/TodoList";
import Nav from './Components/NavBar-Component/Nav'
import Comments from './Components/Comments-Component/Comments'
import "./style.css";

const App = ()=>{
 return(
  <div className='container'>
   <Nav/>
   <TodoList/>
   <Comments/>
  </div>
  )
};

  export default App;