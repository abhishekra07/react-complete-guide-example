import { useState } from 'react'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'
import ExpenseList from './ExpenseList'
import ExpensesChart from './ExpensesChart'

export default function Expenses(props) {

    const [year, setYear] = useState('2020')

    const saveYear = year => {
        setYear(year)
    }

    const filteredExpenses = props.expenses.filter(el => el.date.getFullYear().toString() === year)

    return (
        <Card className="expenses">
            <ExpensesFilter selected={year} onYearChange={saveYear}/>
            <ExpensesChart expenses={filteredExpenses} />
            <ExpenseList items={filteredExpenses} />
        </Card>
    )
}
