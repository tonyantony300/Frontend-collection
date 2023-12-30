const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  symbol: getRandomSymbol,
  number: getRandomNumber,
};

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const sampleSymbols = "!@#$%^&*(){}[]=<>/,.";
  return sampleSymbols[Math.floor(Math.random() * sampleSymbols.length)];
}

console.log(
  getRandomLower(),
  getRandomUpper(),
  getRandomNumber(),
  getRandomSymbol()
);
