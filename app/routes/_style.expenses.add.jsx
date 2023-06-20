import { redirect } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";

import { addExpense } from "~/data/expenses.server";
import { validateExpenseInput } from "~/data/validation.server";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

export const ExpensesAdd = () => {
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

export default ExpensesAdd;

export const action = async ({ request }) => {
  const formData = await request.formData();
  const expenseData = Object.fromEntries(formData);

  try {
    validateExpenseInput(expenseData);
  } catch (error) {
    return error;
  }

  await addExpense(expenseData);
  return redirect("/expenses");
};
