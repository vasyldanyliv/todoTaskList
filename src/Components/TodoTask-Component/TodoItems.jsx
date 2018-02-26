import React, { Component } from "react";
import PropTypes from 'prop-types'
import '../style/Todoitems.css'

class TodoItems extends Component {

 createTasks = item =>
  (
   <div key={item.key}>
   <div className='container-task-item'>
    <div className='task-text'>{item.text}</div>
   <button className='delete-button'
    onClick={() => this.onRemoveTaskHandler(item.key)}>
    Delete
   </button>
  </div>
    <hr/>
   </div>
  );

 onRemoveTaskHandler = key => {
  this.props.onRemoveHandler(key)
 };

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

export default TodoItems;

TodoItems.defaultProps ={
 todoList: [],
};

TodoItems.propTypes = {
 todoList: PropTypes.array,
 onRemoveHandler: PropTypes.func,
};