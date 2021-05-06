import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as toDoActions from '../../actions/toDos';

 class ToDoList extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li>Item do To-Do</li>
                </ul>

                <input type="text"/>
                <button onClick={() => console.log(this.props)}>Novo To-Do</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => 
    bindActionCreators(toDoActions, dispatch);

export default connect(null, mapDispatchToProps)(ToDoList);