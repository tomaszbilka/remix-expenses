import { json } from "@remix-run/node";
import {
  isRouteErrorResponse,
  Link,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";

import { getExpenses } from "~/data/expenses.server";
import Chart from "~/components/expenses/Chart";
import ExpensesStatistics from "~/components/expenses/ExpenseStatistics";

export const ExpenseAnalysis = () => {
  const expenses = useLoaderData();

  return (
    <main>
      <Chart expenses={expenses} />
      <ExpensesStatistics expenses={expenses} />
    </main>
  );
};

export default ExpenseAnalysis;

export const loader = async () => {
  const expenses = await getExpenses();

  if (!expenses || expenses.length === 0) {
    throw json(
      { message: "Could not load expenses to analysis." },
      {
        status: 404,
        statusText: "Expenses not found",
      }
    );
  }

  return expenses;
};

export const ErrorBoundary = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <section id="no-expenses">
        <h1>No expenses found</h1>
        <p>
          Start <Link to="/expenses/add">adding some</Link> now.
        </p>
      </section>
    );
  }
};
