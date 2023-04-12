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
