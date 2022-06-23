"use strict";

module.exports.generateRandomNumber = (event) => {
  const randomNumber = parseInt(Math.random() * 1000);
  console.log("The random generated integer is: ", randomNumber);
  return randomNumber;
};
