import React from 'react'
import ExpenseList from './ExpenseList'
import ExportListFilters from './ExpenseListFilters'
import ExpensesSummary from './ExpensesSummary'

const ExpenseDashboardPage = () => (
    <div>
        <ExpensesSummary />
        <ExportListFilters />
        <ExpenseList />
    </div>
)

export default ExpenseDashboardPage