import { Outlet } from '@remix-run/react';

import styles from '~/styles/expenses.css';

export const links = () => [{ rel: 'stylesheet', href: styles }];

export const ExpensesLayout = () => {
  return (
    <main>
      <p>ExpensesLayout shared!</p>
      <Outlet />
    </main>
  );
};

export default ExpensesLayout;
