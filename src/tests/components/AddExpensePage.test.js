import React from 'react'
import { shallow } from 'enzyme'
import { AddExpensePage } from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'

let addExpense, history, wrapper

beforeEach(() => {
    addExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />)
})

test('Should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('Should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(addExpense).toHaveBeenLastCalledWith(expenses[0])
})