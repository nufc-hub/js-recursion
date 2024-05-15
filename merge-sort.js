#!/usr/bin/env node

function merge(left, right) {
  // Left/ right parameters used to take in merge(mergeSort(leftSide), mergeSort(rightSide));
  mergedArray = [];
  leftIndex = 0;
  rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length)
    if (left[leftIndex] < right[rightIndex]) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }

  return mergedArray.concat(
    left.slice(leftIndex).concat(right.slice(rightIndex))
  );
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  } else if (array.length > 1) {
    let mid = Math.floor(array.length / 2);
    let leftSide = array.slice(0, mid);
    let rightSide = array.slice(mid, array.length);

    return merge(mergeSort(leftSide), mergeSort(rightSide));
  }
}

console.log(mergeSort([105, 79, 100, 110]));
