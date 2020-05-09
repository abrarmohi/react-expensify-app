import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('Should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })

    expect(state).toEqual([])
})

test('Should remove expense by id', () => {
    const state = expensesReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    })

    expect(state).toEqual([expenses[0], expenses[2]])
})

test('Should not remove expense if id not found', () => {
    const state = expensesReducer(expenses, {
        type: 'REMOVE_EXPENSE',
        id: 'abc123'
    })

    expect(state).toEqual([expenses[0], expenses[1], expenses[2]])
})

test('Should add expense', () => {
    const expense = {
        id: '230',
        description: 'coffee',
        amount: 28400,
        createdAt: 1000,
        note: ''
    }
    const state = expensesReducer(expenses, {
        type: 'ADD_EXPENSE',
        expense
    })

    expect(state).toEqual([...expenses, expense])
})

test('Should edit an expense', () => {
    const state = expensesReducer(expenses, {
        type: 'EDIT_EXPENSE',
        id: '2',
        updates: {
            description: 'coffee'
        }
    })

    expect(state[1].description).toBe('coffee')
})

test('Should not edit an expense if expense not found', () => {
    const state = expensesReducer(expenses, {
        type: 'EDIT_EXPENSE',
        id: 'abc123',
        updates: {
            description: 'coffee'
        }
    })

    expect(state).toEqual(expenses)
})