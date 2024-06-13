/** jsb-dom/src/problems.js
 *
 * Write your solutions to the problems here.
 */

/**
 * Prompt #1
 *
 * Write a function that toggles the button betwen "Log In" and "Log Out".
 */
export function prompt1() {
  // Select the element with the id #login-button.
  const button = document.querySelector('#login-button');
  // If the button's text is "Log In", change it to "Log Out".
  // If the button's text is "Log Out", change it to "Log In".
  button.innerText = button.innerText === 'Log In' ? 'Log Out' : 'Log In';
}

/**
 * Prompt #2
 *
 * Send an alert to the user containing the value of the input field.
 * If the user hasn't entered any text, send an alert with the message,
 * "Please enter a message".
 */
export function prompt2() {
  // Start by selecting the element with the id #alert-text-input.
  const msg = document.querySelector('#alert-text-input').value;
  alert(msg || 'Please enter a message');
}

/**
 * Prompt #3
 *
 * The divs in this prompt contain names of CSS colors. Use these names
 * to dyanmically set the background color of the divs.
 */
export function prompt3() {
  const colors = document.querySelectorAll('#color-boxes div');
  colors.forEach((color) => {
    color.style.backgroundColor = color.innerText;
  });
}
/**
 * Prompt #4
 *
 * Use the tasks array to dynamically create a list of tasks.
 * Completed tasks should have green text. Add the tasks to
 * the #task-list element.
 */
export function prompt4() {
  const tasks = [
    { name: 'Drink water', complete: true },
    { name: 'Take a walk', complete: false },
    { name: 'Do the dishes', complete: false },
    { name: 'Make dinner', complete: false },
    { name: 'Read a book', complete: true },
  ];

  const list = document.querySelector('#task-list');
  for (const task of tasks) {
    const li = document.createElement('li');
    li.innerText = task.name;
    if (task.complete) {
      li.style.color = 'green';
    }
    list.appendChild(li);
  }
}

/**
 * Prompt #5
 *
 * The factorial of a number is the product of an integer and all the
 * integers below it. For example, the factorial of 4 is equal to
 * 4 * 3 * 2 * 1 = 24. The factorial of 6 is 6 * 5 * 4 * 3 * 2 * 1 = 720.
 *
 * Take the value of the #num input and calculate the factorial of that number.
 * Display the result of the calculation in the #factorial-result span.
 */
export function prompt5() {
  const num = Number(document.querySelector('#num').value);

  let result = num;
  if (!isNaN(num)) {
    result = num;
    for (let n = num - 1; n >= 1; n -= 1) {
      result = result * n;
    }
  }
  document.querySelector('#factorial-result').innerText = result;
}

/**
 * Prompt #6
 *
 * This is a version of the classic FizzBuzz problem.
 *
 * Write a function that generates <span> elements for the numbers 1 to 100.
 * - For multiples of 3, color the number blue.
 * - For multiples of 5, color the number red.
 * - For multiples of 3 and 5, color the number purple.
 */
export function prompt6() {
  const container = document.querySelector('#fizzbuzz-results');
  for (let i = 1; i <= 100; i++) {
    const span = document.createElement('span');
    span.innerText = i;
    if (i % 3 === 0 && i % 5 === 0) {
      span.style.color = 'purple';
    } else if (i % 3 === 0) {
      span.style.color = 'blue';
    } else if (i % 5 === 0) {
      span.style.color = 'red';
    }
    container.appendChild(span);
  }
}
