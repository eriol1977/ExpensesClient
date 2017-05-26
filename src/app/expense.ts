import { ExpenseType } from './expense-type';

export class Expense {
    id: number;
    date: string;
    type: ExpenseType;
    value: number;
    notes: string;
}