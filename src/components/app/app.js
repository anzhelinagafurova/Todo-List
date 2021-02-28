import React, {Component} from 'react';

import Heading from '../heading';
import TodoList from '../todo-list';
import Filter from '../filter';
import AddTaskForm from '../add-task-form';

export default class App extends Component {
  
  maxId = 100; 

  state = {
    toDoData: [
      this.createToDoItem('Drink coffee'),
      this.createToDoItem('Do a workout'),
      this.createToDoItem('Read a book')
    ],
    term: '',
    filter: 'all'
  }


  createToDoItem(text){
    return {
      label: text, 
      important: false, 
      done: false,
      id: this.maxId++,
      visibility: true
    }
  }

  deleteItem = (id) =>{
    this.setState(({toDoData}) => {
      const index = toDoData.findIndex((element) => element.id === id);

      const newToDoList = [
        ...toDoData.slice(0, index),
        ...toDoData.slice(index+1)
      ];

      return {
        toDoData: newToDoList
      }
    })
  }

  addItem = (text) => {
    const newItem = this.createToDoItem(text);
    this.setState(({toDoData}) =>{
      const newToDoList = [...toDoData, newItem];
      return {
        toDoData: newToDoList
      }
    })
  }

  onToggleImportant = (id) => {
    this.setState(({toDoData}) =>{
      return {
        toDoData: this.toggleProperty(toDoData, id, 'important')
      }
    })
  }

  onToggleDone = (id) => {
    this.setState(({toDoData}) =>{
      return {
        toDoData: this.toggleProperty(toDoData, id, 'done')
      }
    })
  }

  onSearchChange = (term) => {
    this.setState({
      term: term
    })
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  }

  toggleProperty(arr, id, propName){
      const index = arr.findIndex((element) => element.id === id);

      const oldItem = arr[index];
      const newItem = {...oldItem, [propName]: !oldItem[propName]};
      return[
        ...arr.slice(0, index),
        newItem,
        ...arr.slice(index+1)
      ];
    
  }

  search(items, term){
    if(term.length === 0){
      return items;
    };
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    })
  }

  filter(items, filter){
    switch(filter){
      case "all": 
        return items;
      case "active":
        return items.filter((item) => !item.done);
      case "done":
        return items.filter((item) => item.done);
      default:
        return items;
    }
  }
  render(){
    const {toDoData, term, filter} = this.state;

    let visibleItems = this.filter(this.search(toDoData, term), filter)

    return (
      <div>
      <Heading/>  
      <Filter 
      filter = {filter}
      onFilterChange = {this.onFilterChange}/>
      <TodoList 
      todos = {visibleItems}
      onDeleted = {this.deleteItem}
      onToggleImportant= {this.onToggleImportant}
      onToggleDone= {this.onToggleDone}/>
      <AddTaskForm
      onAdded = {this.addItem}/>
    </div>
    );
  }
};

