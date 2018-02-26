import React, { Component } from "react";
import PropTypes from 'prop-types'
import "../style/Comments.css";

class TodoCommentItem extends Component {

 createTasks = item =>
  (
   <div key={item.key}>
    <div className='container-comment-item' >
     <div className='square-comment-block'>
     </div>
     <div className='comment-text'>{item.text}</div>
    </div>
    <hr/>
   </div>

  );

 render() {
  const todoList = this.props.todoList;
  const listItems = todoList.map(this.createTasks);
  return (
   <div>
    {listItems}
   </div>
  );
 }
}

export default TodoCommentItem;

TodoCommentItem.defaultProps ={
 todoList: [],
};

TodoCommentItem.propTypes = {
 todoList: PropTypes.array
};