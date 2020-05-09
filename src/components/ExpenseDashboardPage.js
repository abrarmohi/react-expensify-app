import React from 'react'
import ExpenseList from './ExpenseList'
import ExportListFilters from './ExpenseListFilters'

const ExpenseDashboardPage = () => (
    <div>
        <ExportListFilters />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage