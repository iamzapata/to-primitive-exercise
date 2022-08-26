function checkNewTarget(newTarget, fn) {
  if (!newTarget)
    throw TypeError(
      `${fn.name} must be invoked as a constructor using the 'new' keyword.`
    );
}

function numberToWords() {
  return "NUMBER_IN_WORDS_PLACEHOLDER";
}

function PaymentOne(number) {
  checkNewTarget(new.target, PaymentOne);

  this.number = number;
}

PaymentOne.prototype.toString = function toString() {
  return numberToWords();
};

PaymentOne.prototype.valueOf = function valueOf() {
  return this.number;
};

console.log("\n");
console.log("--PaymentOne--");
console.log("\n");

let payment1Value = 20000000;
let payment1 = new PaymentOne(payment1Value);

console.log("toString", payment1.toString());
console.log("valueOf", payment1.valueOf());
console.log("payment1", payment1);
console.log("Number", Number(payment1));
console.log("subtraction", payment1 - 30000000);
console.log("comparison", payment1 < 0);
console.log("loose equality", payment1 == payment1Value);
console.log("srict equaliy", payment1 === payment1Value);
console.log("String", String(payment1));
console.log("template string", `${payment1}`);
console.log("string concatenation", "$ " + payment1);

console.log("\n");
console.log("--PaymentTwo--");
console.log("\n");

function PaymentTwo(number) {
  checkNewTarget(new.target, PaymentTwo);

  this.number = number;
}

PaymentTwo.prototype[Symbol.toPrimitive] = function toPrimitive(hint) {
  if (hint === "string") return numberToWords();

  if (hint === "number") return parseFloat(this.number);

  if (hint === "default")
    return Number.prototype.toLocaleString.apply(this.number);
};

let payment2Value = 30000000;
let payment2 = new PaymentTwo(payment2Value);

console.log("toString", payment2.toString());
console.log("valueOf", payment2.valueOf());
console.log("payment2", payment2);
console.log("Number", Number(payment2));
console.log("+", +payment2);
console.log("subtraction", payment2 - 30000000);
console.log("comparison", payment2 < 0);
console.log("loose equality", payment2 == payment2Value);
console.log("strict equality", payment2 === payment2Value);
console.log("String", String(payment2));
console.log("template string", `${payment2}`);
console.log("string concatenation", "$ " + payment2);
