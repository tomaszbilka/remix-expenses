import { FaPlus, FaDownload } from "react-icons/fa";
import { Link, Outlet, useLoaderData } from "@remix-run/react";

import { getExpenses } from "~/data/expenses.server";
import ExpensesList from "~/components/expenses/ExpensesList";

export const ExpensesLayout = () => {
  const expenses = useLoaderData();

  const hasExpenses = expenses && expenses.length > 0;

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
        {hasExpenses && <ExpensesList expenses={expenses} />}
        {!hasExpenses && (
          <section id="no-expenses">
            <h1>No expenses found</h1>
            <p>
              Start <Link to="add">adding some</Link> now.
            </p>
          </section>
        )}
      </main>
    </>
  );
};

export default ExpensesLayout;

export const loader = async () => {
  const expenses = await getExpenses();
  return expenses;
};
