import { Outlet } from '@remix-run/react';

export const ExpensesLayout = () => {
  return (
    <main>
      <p>ExpensesLayout shared!</p>
      <Outlet />
    </main>
  );
};

export default ExpensesLayout;
