/* Write a function that take a string and return true if the string only contain uppercase and lowercase
characters (no numbers and symbols) and it should end with capital A else return false */

function capitalA(s) {
  let regex = /^[a-zA-Z]+A$/;
  return regex.test(s);
}

/* Write a function that take a string and return true if the the sting is following the emails pattern
which end with io (example@example.io) */

function ioEmail(email) {
  let regex = /^\w+@\w+\.io$/;
  return regex.test(email);
}
