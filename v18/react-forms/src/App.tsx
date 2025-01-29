import { useState } from "react";
import ExpenseList from "./components/expense-tracker/components/ExpenseList";
import ExpenseFilter from "./components/expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./components/expense-tracker/components/ExpenseForm";
import "./App.css";
const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, desc: "aaa", amount: 10, category: "Groceries" },
    { id: 2, desc: "bbb", amount: 10, category: "Groceries" },
    { id: 3, desc: "ccc", amount: 10, category: "Groceries" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const columns = ["Description", "Amount", "Category", ""];

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((item) => id !== item.id));
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <div>
      <h3> Expense Tracker </h3>
      <ExpenseForm
        onSubmit={(expense) =>
          setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
        }
      />

      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList
        columns={columns}
        items={visibleExpenses}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default ExpenseTracker;
