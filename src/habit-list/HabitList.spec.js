import React from 'react'
import {defaultState} from "./habitReducer"
import HabitList from "./HabitList"
import Http from "../util/Http"

const defaultProps = {...defaultState, dispatch: jasmine.createSpy()}


describe('HabitList', () => {
    beforeEach(() => {
        spyOn(Http, 'get').and.returnValue(Promise.resolve())
    })

    it('handles an empty habit list gracefully', () => {
        const props = {...defaultProps, habits: []}
        const component = shallow(<HabitList {...props}/>)

        expect(component).not.toBeNull()
    })
})