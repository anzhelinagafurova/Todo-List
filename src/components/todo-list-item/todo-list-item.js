import React, {Component} from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {
    
    onLabelClick = () => {
        this.setState((state) => {
            return{
                done: !state.done
            }
        })
    };

    render(){
       const {label, onDeleted, onToggleDone, important, done} = this.props;

       let classNames = 'todo-list-item';
       if(done){
           classNames+=' done'
       }
       if(important){
        classNames+=' important';
       }
        return (
            <div>
                <span className={classNames}
                onClick={onToggleDone}>
                    {label}
                </span>

                <button type="button" 
                className="btn btn-outline-danger bt-sm mark-button"
                onClick={onDeleted}>
                    <i className='fa fa-trash-o'/>
                </button>              
            </div>  
        );
    }
}
