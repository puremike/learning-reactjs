"use strict";

//includes()
const stringID = "My name is Michael, I'm React Developer";

if (stringID.includes("name")) {
  console.log(true);
} else console.log(false);

console.log("\n.....String Operations.....");

function toLogin(string) {
  const userName = "michael egbinola";
  const userNameToLowerCase = string.toLowerCase().trim();

  if (userName === userNameToLowerCase) {
    console.log(`Login Successful!`);
  } else console.log(`Login Failed!`);
}

toLogin("MicHEl EgbINOLa");

//pure function
const pureFunc = (a, b) => {
  return a * b;
};

console.log(pureFunc(2, 3));

//impure function
let c = 10;
const funcB = (a, b) => {
  return (a + b) * c;
};

console.log(funcB(2, 3));
c = 20; //Side Effect
console.log(funcB(2, 3));
