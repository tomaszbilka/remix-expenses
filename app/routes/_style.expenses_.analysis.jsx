import ExpensesStatistics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart";

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

export const ExpenseAnalysis = () => {
  return (
    <main>
      <Chart expenses={DUMMY_EXPENSES} />
      <ExpensesStatistics expenses={DUMMY_EXPENSES} />
    </main>
  );
};

export default ExpenseAnalysis;
