import React, {Component}  from 'react';

export default class TaskForm extends Component{

    state={
        title:'',
        description:''
    }

    onSubmit = (e) => {
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault();
    }

    onChange = e =>{
        this.setState({
             [e.target.name] : e.target.value
        })
    }

    render(){
        return(           
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text"
                    name="title"
                    placeholder="Write a Task" 
                    onChange={this.onChange} 
                    value={this.state.title}>
                </input>
                <br/>
                <br/>
                <textarea 
                    name="decription"
                    placeholder="Write a Description" 
                    onChange={this.onChange} 
                    value={this.state.description}>
                </textarea>
                <br/>
                <br/>
                <input type="submit"></input>
            </form>
        )
    }
}