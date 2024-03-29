'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Exercise Number 1
const bankDepositSum = accounts
    .flatMap(acc => acc.movements)
    .filter(acc=>acc>0)
    .reduce((acc,value)=>acc+value,0);

console.log(bankDepositSum)

// Exercise Number 2
const numdeposits1000 = accounts
    .flatMap(acc=> acc.movements)
    .filter(acc=>acc>1000)
    .sort((a,b)=>a-b)
    .length

console.log(numdeposits1000)

// Exercise Number 3

// This Is a Nice Title
const convertTitleCase = (title)=>{
      const expection = [`a`,`an`,`the`,`but`,`or`,`on`,`in`,`with`];
      const titleCase = title.toLowerCase().split(``)
      console.log(titleCase)
}
convertTitleCase( `this is a nice Title`)