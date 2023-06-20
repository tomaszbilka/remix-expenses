import { FaPlus, FaDownload } from "react-icons/fa";
import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";

import { getExpenses } from "~/data/expenses.server";
import ExpensesList from "~/components/expenses/ExpensesList";

export const ExpensesLayout = () => {
  const expenses = useLoaderData();

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
        <ExpensesList expenses={expenses} />
      </main>
    </>
  );
};

export default ExpensesLayout;

export const loader = async () => {
  const expenses = await getExpenses();
  return json(expenses);
};
