import React, {Component} from 'react';
import './add-task-form.css';

export default class AddTaskForm extends Component{
    state = {
        label: ''
    };
    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        if(this.state.label!==''){
            this.props.onAdded(this.state.label);
        }
        this.setState({
            label: ''
        })
    }
    render(){;
        return(
            <form className="add-task-form"
            onSubmit={this.onSubmit}>
                <div className="form-group add-task-form__input">
                    <input className="form-control" 
                    type="text" 
                    placeholder="Add some task"
                    onChange={this.onLabelChange}
                    value={this.state.label}/>
                </div>
                <button type="submit" 
                    className="btn btn-outline-info bt-sm add-button">
                    <i className='fa fa-plus'/>
                </button>
            </form>
        )
    }
}