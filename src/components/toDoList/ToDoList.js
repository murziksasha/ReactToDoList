import { Component } from "react";

import './ToDoList';
import ToDoItems from "../toDoItems/ToDoItems";

class ToDoList extends Component {
  constructor(props){
    super(props);
    this.state ={
      items: []
    };
  }

  addItem = (e) => {
    e.preventDefault();
    const itemArray = this.state.items;
    if(this._inputElement.value !== '') {
      itemArray.unshift({
        text: this._inputElement.value,
        key: Date.now()
      });

      this.setState({
        items: itemArray
      })

      this._inputElement.value = '';
      console.log(itemArray);
    }



  }

  render(){
    return(
      <div className="toListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={a => this._inputElement = a} placeholder="Enter task" />
            <button type="submit">OK</button>
          </form>
        </div>
          <ToDoItems entries={this.state.items}/>
      </div>
    )
  }
}

export default ToDoList;