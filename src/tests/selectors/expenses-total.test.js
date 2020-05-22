import expenses from '../fixtures/expenses'
import selectExpensesTotal from '../../selectors/expenses-total'

test('Should return 0 if no expense', () => {
    const total = selectExpensesTotal([])

    expect(total).toBe(0)
})

test('Should correctly add up a single expense', () => {
    const total = selectExpensesTotal([expenses[0]])

    expect(total).toBe(195)
})


test('Should correctly add up multiple expenses', () => {
    const total = selectExpensesTotal(expenses)

    expect(total).toBe(114195)
})