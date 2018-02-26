import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "../style/TodoList.css";
import uuid from 'uuid'
class TodoList extends Component {

 constructor(props) {
  super(props);

  let data = this.getLocalStorageData();
  this.state = {
   items: data.items,
  };
 }

 onAddTaskHandler = e => {
  const itemArray = this.state.items;
  if (this._inputElement.value !== '') {
   itemArray.unshift({
    text: this._inputElement.value,
    key: uuid.v1(),
   });

   this.setState(() => {
     return {item: itemArray}
    },
    () => {
     this.saveLocalStorageData()
    });
   this._inputElement.value = ''
  }
  e.preventDefault();
 };

 onRemoveTaskHandler = key => {
  let filteredItems = this.state.items;
  filteredItems = filteredItems.filter(item => item.key !== key);
  this.setState(() => {
   return {items: filteredItems}
  }, () => {
   this.saveLocalStorageData()
  })
 };

 getLocalStorageData = ()=>{
  if( !(!!localStorage.getItem("DATA"))  ){
   return {items: []}
  } else{
   return JSON.parse(localStorage.getItem("DATA"));
  }

 };

 saveLocalStorageData = ()=> {
  let data = JSON.stringify({items: this.state.items});
  localStorage.setItem("DATA", data);
 };

 render() {
  return (
   <div className='container-todoListMain'>
   <div className="todoListMain">
    <div className="header">
     <p>Items</p>
     <form onSubmit={this.onAddTaskHandler}>
      <input ref={input =>this._inputElement = input}
       placeholder="Type name here... ">
      </input>
      <button type="submit">Add New</button>
     </form>
    </div>
    <TodoItems todoList={this.state.items}
               onRemoveHandler={this.onRemoveTaskHandler}
    />
   </div>
   </div>
  );
 }
}

export default TodoList;

