import { MonthName } from 'enums';

export const getDayAndMonth = (date: Date) => `${date.getDate()} ${MonthName[date.getMonth()]}`;

export const getKeyByValue = (object: Record<string, string[]>, value: string) =>
  Object.keys(object).find((key) => object[key].includes(value));
