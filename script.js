"use strict";


const love = ["will find a new love", "will lose your love", "are in love"];
const health = [
  "will live a long life",
  "will have a terrible illness",
  "will die soon",
];
const money = ["will be rich", "will lose all your money", "are poor"];


const generateAstro = (sign) => {
  
  
    let lovemsg = Math.floor(Math.random() * love.length);
    let healthmsg = Math.floor(Math.random() * health.length);
    let moneymsg = Math.floor(Math.random() * money.length);
  

    console.log(`Hi ${sign}, Here is your Daily Horoscope :You ${love[lovemsg]}, You ${health[healthmsg]}, You ${money[moneymsg]}`);
  };
  
  
  generateAstro('Aries')
