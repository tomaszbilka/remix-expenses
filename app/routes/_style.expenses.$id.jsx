import { useNavigate } from "@remix-run/react";

import { getExpense } from "~/data/expenses.server";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

export const ExpenseDetails = () => {
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate("..");
  };

  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  );
};

export default ExpenseDetails;

export const loader = async ({ params }) => {
  const expenseId = params.id;
  const expense = await getExpense(expenseId);
  return expense;
};
