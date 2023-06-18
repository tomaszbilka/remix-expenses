import { Outlet } from '@remix-run/react';

import ExpensesHeader from '~/components/navigation/ExpensesHeader';
import styles from '~/styles/expenses.css';

export const ExpensesStyleLayout = () => {
  return (
    <>
      <ExpensesHeader />
      <Outlet />;
    </>
  );
};

export default ExpensesStyleLayout;

export const links = () => [{ rel: 'stylesheet', href: styles }];
