/* Write a function to do the division operation without using the built-in division*/

function division(number, dividedBy) {
  if (dividedBy === 0) {
    return "Error";
  }
  //
  else if (Math.abs(number) < Math.abs(dividedBy)) return 0;
  //
  else if (Math.abs(number) % Math.abs(dividedBy) === 0) {
    let i = 1;
    return (
      i + division(Math.abs(number) - Math.abs(dividedBy), Math.abs(dividedBy))
    );
    //
  } else if (number % dividedBy !== 0) {
    return 0 + division(number - (number % dividedBy), dividedBy);
  }
}

/* Write a function that implement Math.pow(x,n) but using recursion
Example:
pow(2,4) = 16
*/

function pow(x, n) {
  if (n === 0) return 1;
  //
  else {
    return x * pow(x, n - 1);
  }
}
/* The Fibonacci Series is a numeric series starting with the integers 0 and 1. In this series,
the next integer is determined by summing the previous two. This gives us:

0, 1, 1, 2, 3, 5, 8, 13, ...

Write a function that take n as parameter and return the nth element in the Fibonacci Series

Example: n = 4 ==> 3, n= 0 ==> 0, n = 3 ==> 2 */

function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    let n1, n2, nr;
    n1 = 0;
    n2 = 1;
    nr = 0;
    for (let i = 0; i < n - 1; i++) {
      nr = n1 + n2;
      n1 = n2;
      n2 = nr;
    }
    return nr;
  }
}
