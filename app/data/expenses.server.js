import { prisma } from "./database.server";

export const addExpense = async (expenseData) => {
  //npx prisma generate -> in terminal to regenerate prisma client and add model from schema.prisma
  try {
    return await prisma.expense.create({
      data: {
        title: expenseData.title,
        amount: +expenseData.amount,
        date: new Date(expenseData.date),
      },
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getExpenses = async () => {
  try {
    const expenses = await prisma.expense.findMany({
      orderBy: {
        date: "desc",
      },
    });
    return expenses;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
