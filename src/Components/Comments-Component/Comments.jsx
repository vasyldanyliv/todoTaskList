import React from "react";
import TodoComments from './TodoComments'
import '../style/Comments.css'

const Comments = ()=>{
 return(
  <div className='comments-container'>
   <h3>Comments #2</h3>
  <TodoComments/>
  </div>
 )
};

export default Comments;