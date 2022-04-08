import { Component } from "react";
import FlipMove from 'react-flip-move';

import './ToDoItems.css';

class ToDoItems extends Component {
  delete(key) {
    this.props.delete(key);
  }

  createTasks = (item) => {
    return <li 
    onClick={() => this.delete(item.key)}
    key= {item.key}>{item.text}</li>
  }

  

  render(){

    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);

    return(
      <ul className="theList">
        <FlipMove duration={500} easing='ease-in'>
          {listItems}
        </FlipMove>
      </ul>

    )
  }
}

export default ToDoItems;