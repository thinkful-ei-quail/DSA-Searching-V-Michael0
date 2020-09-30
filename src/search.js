function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return i;
    }
  }
  return -1;
};

function binarySearch(array, value, start, end, counter = 1) {
  console.log("counter:", counter);
  let count = counter + 1
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  //console.log(start, end);
  if (item == value) {
    return index;
  }
  else if (item < value) {
    return binarySearch(array, value, index + 1, end, count);
  }
  else if (item > value) {
    return binarySearch(array, value, start, index - 1, count);
  }
};

const arr = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18, 19, 20, 24, 33, 36, 40, 41, 45, 57, 68];

console.log(binarySearch(arr, 8)); 
console.log(binarySearch(arr, 16)); 