import React, { Component } from "react";
import TodoCommentItem from './TodoCommentItem'
import '../style/Comments.css'
import uuid from 'uuid'
class TodoComments extends Component {

 constructor(props){
  super(props);

  let data = this.getLocalStorageData();

  this.state = {
   items: data.items
  };
 }

 addItem = (e) => {
  if (e.keyCode === 13 && e.ctrlKey) {

   const itemArray = this.state.items;
   if (this._inputElement.value !== '') {
    itemArray.push({
     text: this._inputElement.value,
     key: uuid.v1()
    });
    const item = itemArray;


    this.setState(()=>{
     return {item: item}},
     ()=>{this.saveLocalStorageData()});
    this._inputElement.value = ''
   }
  }
 };

 getLocalStorageData = ()=>{
  if( !(!!localStorage.getItem("DATA-COMMENTS"))  ){
   return {items: []}
  } else{
   return JSON.parse(localStorage.getItem("DATA-COMMENTS"));
  }

 };

 saveLocalStorageData = ()=> {
  let data = JSON.stringify({items: this.state.items});
  localStorage.setItem("DATA-COMMENTS", data);
 };

 render() {
  return (
      <div>
     <TodoCommentItem todoList={this.state.items}/>
       <div className='image-comment-input'>
        <div className='square-comment-block-input'>

        </div>
        <textarea className='comment-input'  onKeyDown = {this.addItem}
                         ref={input =>this._inputElement = input}>
       </textarea></div>

      </div>
  );
 }
}

export default TodoComments;