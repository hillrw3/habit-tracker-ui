import React from 'react'
import {
    Card, CardText, CardTitle, Table, TableBody, TableHeader, TableHeaderColumn, TableRow,
    TableRowColumn
} from "material-ui"
import Http from "../util/Http"
import {habitsRequest, habitsSuccess} from "../actions"
import {connect} from "react-redux"

export default class HabitList extends React.Component {
    componentDidMount() {
        this.fetchData()
    }

    render() {
        const {habits} = this.props

        return (
            <Card className='habits'>
                <CardTitle title="Your Habits"/>
                <Table>
                    <TableBody>
                        {this.tableContent(habits)}
                    </TableBody>
                </Table>
            </Card>
        )
    }

    tableContent(habits) {
        if (habits.length === 0) {
            return (
                <TableRow>
                    <TableRowColumn>Make some habits!!</TableRowColumn>
                </TableRow>
            )
        }

        return (
            habits.map(habit =>
                <TableRow key={habit.id}>
                    <TableRowColumn>{`${habit.actualFrequency}/${habit.targetFrequency} ${habit.title}`}</TableRowColumn>
                </TableRow>
            )
        )
    }

    fetchData() {
        const {dispatch} = this.props

        dispatch(habitsRequest())
        Http.get('/habits').then(data => {
            dispatch(habitsSuccess(data))
        })
    }
}

export const mapStateToProps = (state) => {
    return {
        ...state.habits
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export const HabitListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HabitList)