import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

  const [isEditable, setIsEditable] = useState(false);

  const startEditingHandler = () => {
    setIsEditable(true)
  }

  const stopEditingHandler = () => {
    setIsEditable(false)
  }

  return (
    <div className="new-expense">
      {!isEditable && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditable && <ExpenseForm onSaveExpense={props.onSaveExpense} onCancel={stopEditingHandler}/>}
    </div>
  );
};

export default NewExpense;
