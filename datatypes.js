/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/
/* numbr = any possible digit (48)*/
/* string = any type of text/info ("example") */
/* boolean =  type of info which is either true or false (true) */
/* null = no value (0) */
/* NaN = no value */
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/
/*A declaired container with some info/data inside, which can be used further in the code.
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/
/* WRITE YOUR ANSWER HERE */
console.log("Exercise 3:");
number1 = 12;
number2 = 20;
sum = number1 + number2;
console.log(sum);

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/
/* WRITE YOUR ANSWER HERE */
let x = 12;
/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/
let myName = "John Doe";

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/
console.log("Exercise 6:");
x -= 12;
console.log(x);
/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/
console.log("Exercise 7:");
let name1 = "john";
let name2 = "John";
console.log(name1 == name2);
if (name1 == name2) {
  console.log("✅ Both are lowercase");
}
/* WRITE YOUR ANSWER HERE */

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/
/* WRITE YOUR ANSWER HERE */
console.log("Exercise 8:");
x = 8;
if (x === 8) {
  number_8 = "eight";
}
console.log(number_8);

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/
