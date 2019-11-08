import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';

import * as actions from './store/actions'
import * as styles from './PersonList.module.scss'
import axios from '../../axios'
import { Paper } from '@material-ui/core';



class PersonList extends Component {

    componentDidMount() {
        this.props.fetchPersons()
    }

    render() {
        const persons = this.props.persons.map(p => (
            <li key={p.id}>{p.name}</li>
        ))

        return (
            <ul>
                {persons}
            </ul>
        )
    }
}

const matStateToProps = state => {
    return {
        persons: state.persons
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPersons: () => dispatch(actions.fetchPersons())
    }
}

export default connect(matStateToProps, mapDispatchToProps)(PersonList);