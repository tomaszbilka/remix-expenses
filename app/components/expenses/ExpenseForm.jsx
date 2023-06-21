import {
  Form,
  Link,
  useActionData,
  useMatches,
  useNavigation,
  useParams,
} from "@remix-run/react";

function ExpenseForm() {
  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10
  const validationError = useActionData();
  const params = useParams();

  const navigation = useNavigation();
  const matches = useMatches();
  const expenses = matches.find(
    (match) => match.id === "routes/_style.expenses"
  ).data;
  const expenseData = expenses.find((expense) => expense.id === params.id);

  const defaultValues = expenseData
    ? {
        title: expenseData.title,
        amount: expenseData.amount,
        date: expenseData.date,
      }
    : {
        title: "",
        amount: "",
        date: "",
      };

  const isSubmitting = navigation.state !== "idle";

  // -----programatic submit-----
  // const submit = useSubmit();

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   //own validation
  //   //...
  //   submit(event.target, {
  //     // action: "expenses/add",
  //     method: "post",
  //   });
  // };

  return (
    <Form
      method={expenseData ? "patch" : "post"}
      className="form"
      id="expense-form"
      // onSubmit={submitHandler}
    >
      <p>
        <label htmlFor="title">Expense Title</label>
        <input
          defaultValue={defaultValues.title}
          id="title"
          maxLength={30}
          name="title"
          required
          type="text"
        />
      </p>

      <div className="form-row">
        <p>
          <label htmlFor="amount">Amount</label>
          <input
            defaultValue={defaultValues.amount}
            type="number"
            id="amount"
            name="amount"
            min="0"
            step="0.01"
            required
          />
        </p>
        <p>
          <label htmlFor="date">Date</label>
          <input
            defaultValue={
              defaultValues.date ? defaultValues.date.slice(0, 10) : ""
            }
            type="date"
            id="date"
            name="date"
            max={today}
            required
          />
        </p>
      </div>
      {validationError && (
        <ul>
          {Object.values(validationError).map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
      <div className="form-actions">
        <button disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save Expense"}
        </button>
        <Link to="..">Cancel</Link>
      </div>
    </Form>
  );
}

export default ExpenseForm;
