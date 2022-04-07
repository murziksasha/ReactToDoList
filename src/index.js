import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './components/toDoList/ToDoList';

import './index.css';


const destination = document.querySelector('#container');

ReactDOM.render(
  <div>
    <ToDoList/>
  </div>,
  destination
)