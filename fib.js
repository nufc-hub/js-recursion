#!/usr/bin/env node

// Fibonacci loop.

function fibonacci(n) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  let a = 0;
  let b = 1;
  let fibArray = [a, b];

  for (let i = 0; i <= n; i++) {
    let result = a + b;
    fibArray.push(result);
    a = b;
    b = result;
  }
  return fibArray;
}

// Fibonacci recursive.

function fibRecursive(n) {
  if (n === 0) return [0];
  if (n === 1) return [0, 1];

  let array = fibRecursive(n - 1);
  array.push(array[n - 1] + array[n - 2]);

  return array;
}
