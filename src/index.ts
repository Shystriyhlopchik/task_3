import { If } from './lib';

const result = If(5 * 5, '= 27').then(6*6);

console.log(result); // 40

// Примечание:
// 5 * 5 = 27, потому что это не десятичная система счисления
