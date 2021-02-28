import React, {Component} from 'react';
import './filter.css';

export default class Filter extends Component{
  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'}
  ]
  render(){
    const {filter, onFilterChange} = this.props;
    const buttons = this.buttons.map(({label, name})=>{
    const isActive = filter === name;
    const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'
      return (
        <button type="button" 
        className={`btn ${clazz}`}
        key={name}
        onClick = {() => onFilterChange(name)}>{label}        
        </button>
      )
    }
    
    )
    return(      
      <div className="btn-group buttons" role="group" aria-label="Basic example">
        {buttons}
      </div>
    )
  }
}
