import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as toDoActions from '../../actions/toDos';

 class ToDoList extends Component {

    state = {
        newToDoText: '',
    }

    addNewToDo = () => {
        this.props.addToDo(this.state.newToDoText)

        this.setState({newToDoText: ''})
    }

    render() {
        return (
            <div>
                <ul>
                    {this.props.toDos.map(toDo => (
                        <li key={toDo.id}>{toDo.text}</li>
                    ))}                    
                </ul>

                <input 
                    type="text"
                    value={this.state.newToDoText}
                    onChange={(e) => this.setState({newToDoText: e.target.value})}
                />
                <button onClick={this.addNewToDo}>Novo To-Do</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    toDos: state.toDos,
})

const mapDispatchToProps = dispatch => 
    bindActionCreators(toDoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);