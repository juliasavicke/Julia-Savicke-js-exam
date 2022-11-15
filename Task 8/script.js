/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klase "Calculator", kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */
class Calculator {
  sum(a, b) {
    return a + b;
  }
  subtraction(a, b) {
    return a - b;
  }
  multiplication(a, b) {
    return a * b;
  }
  division(a, b) {
    return a / b;
  }
}

const calc = new Calculator();
console.log("calc.sum(12, 8); ===", calc.sum(12, 8));
console.log("calc.subtraction(12, 8); ===", calc.subtraction(12, 8));
console.log("calc.multiplication(12, 8); ===", calc.multiplication(12, 8));
console.log("calc.division(12, 8); ===", calc.division(12, 8));
