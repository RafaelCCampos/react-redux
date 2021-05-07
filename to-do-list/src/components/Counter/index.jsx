import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) => {
    return(
        <h2>Você possui {props.toDos.length} To-Dos</h2>
    )
}

const mapStateToProps = state => ({
    toDos: state.toDos,
})


export default connect(mapStateToProps)(Counter);