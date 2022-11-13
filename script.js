'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };

// const accounts = [account1, account2, account3, account4];

// Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');

// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');

// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');

// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// let letters = [`a`,`b`,`c`,`d`,`e`];

// console.log(letters.splice(0,2 ));

// letters = [`a`,`b`,`c`,`d`,`e`];
// console.log(letters.reverse())
// console.log(letters)

// let  num1 = [`1`,`2`,`3`,`4`,`5`];
// let  num2 = [`6`,`7`,`8`,`9`,`10`];
// let  num3 = [`11`,`12`,`13`,`14`,`15`]
// let allNum =num1.concat(num1,num2,num3);


// console.log(allNum)
/////////////////////////////////////////////////

// let AlphLetters = [`ab`,`bc`,`cd`,`de`,`ef`];
// console.log(AlphLetters.join(``))


// let arr = [`Benz`,`Audi`,`Toyota`,`Bentley`,`Volgswagen`];
// console.log(arr[2])
// console.log(arr.at(4))

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// For Loop
for(let i = 0; i<movements.length; i++){
  console.log(movements[i])
}
 
// For of Loop
for (const [i,movement] of movements.entries()){
  if(movement>1){
    console.log(`You deposited ${i} ${movement}`)
  }else{
    console.log(`You withdrew ${i} ${Math.abs(movement)}`)
  }
}

console.log(`--------For Each Starts here---------- `)
// For each Loop
movements.forEach(movemen =>{
  let balance = movemen>1 ? `You Deposited ${Math.abs(movemen)}`: `You Withdrew ${Math.abs(movemen)}`;
  console.log(balance)
})

let cars = [`Benz`,`Audi`,`Toyota`,`Bentley`,`Volgswagen`];
cars.forEach((car ,index,array)=>{
   let number = index + 1
   console.log(`This is my ${number}  ${car}`)
})
 

// For Each loop in Maps
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value,key,map)=>{
  console.log(`This are my value: ${value},
  This is my Key: ${key}`)
})

// For Each loop in Sets
let currenciesUnique = new Set([`USD`,`GBP`,`USD`,`EUR`,`EUR`]);
currenciesUnique.forEach((value,_,set)=>{
     console.log(`This is my value ${value}`)})
