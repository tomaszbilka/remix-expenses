import { FaPlus, FaDownload } from "react-icons/fa";
import { Link, Outlet } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "First Expense",
    amount: 12.99,
    date: new Date().toISOString(),
  },
  {
    id: "e2",
    title: "Second Expense",
    amount: 19.99,
    date: new Date().toISOString(),
  },
];

export const ExpensesLayout = () => {
  return (
    <>
      <Outlet />
      <main>
        <section id="expenses-actions">
          <Link to="add">
            <FaPlus />
            <span>Add expense</span>
          </Link>
          <a href="/expenses/raw" target="_blank">
            <FaDownload />
            <span>Load row data</span>
          </a>
        </section>
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  );
};

export default ExpensesLayout;
