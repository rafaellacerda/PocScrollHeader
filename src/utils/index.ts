import {colors, companies, hours, value} from './consts';

export const calcScroll = (value: any, checkOne: number, checkTwo: number) =>
  Math.abs(value - checkOne) < Math.abs(value - checkTwo) ? checkOne : checkTwo;

export const generateData = (count = 50) =>
  Array(count)
    .fill('')
    .map((_, index) => ({
      name: companies[Math.floor(Math.random() * companies.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      hours: hours[Math.floor(Math.random() * hours.length)],
      value: value[Math.floor(Math.random() * value.length)],
      key: index,
    }));
