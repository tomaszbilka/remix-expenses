import { useNavigate } from '@remix-run/react';

import ExpenseForm from '~/components/expenses/ExpenseForm';
import Modal from '~/components/util/Modal';

export const ExpenseDetails = () => {
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate('..');
  };

  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  );
};

export default ExpenseDetails;