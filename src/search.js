var now = require("performance-now");
function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    //console.log("indexOf Count:",i);
    if (array[i] == value) {
      return i;
    }
  }
  return -1;
};

function binarySearch(array, value, start, end, counter = 1) {
  //console.log("counter:", counter);
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

let arr = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18, 19, 20, 24, 33, 36, 40, 41, 45, 57, 68,3, 5, 6, 8, 11, 12, 14, 15, 17, 18, 19, 20, 24, 33, 36, 40, 41, 45, 57, 68,3, 5, 6, 8, 11, 12, 14, 15, 17, 18, 19, 20, 24, 33, 36, 40, 41, 45, 57, 68,3, 5, 6, 8, 11, 12, 14, 15, 17, 18, 19, 20, 24, 33, 36, 40, 41, 45, 57, 68,3, 5, 6, 8, 11, 12, 14, 15, 17, 18, 19, 20, 24, 33, 36, 40, 41, 45, 57, 68,3, 5, 6, 8, 11, 12, 14, 15, 17, 18, 19, 20, 24, 33, 36, 40, 41, 45, 57, 68];
function genArry(n)
{
  let result = [];
  for(let i = 0; i<n; i++)
  {
    result.push(i + 1);    
  }
  return result;
}
const num = 75
arr = genArry(150);
//console.log(binarySearch(arr, 8));
let t1 = now(); 
console.log(binarySearch(arr, num));
let t2 = now();
console.log("BinarySearch took:",t2 - t1, "miliseconds");
t1 = now();
console.log(indexOf(arr, num));
t2 = now();
console.log("IndexOf took:",t2 - t1, "miliseconds");

function deweySearch(dewey,title,bookIndex)
{
  const section = bookIndex[dewey];
  for(const book in section)
  {
    if(section[book].title === title)
    {
      return {Dewey:dewey,Index:Number(book),Book:section[book]};
    }
  }
  return -1;
}

const DeweyBookIndex = [
  [
    {
      title:"Meow book",
      desc:"Book of meow",
      author:"Meowington Jr",
      date:"The beginning of time."
    },
    {
      title:"Bark book",
      desc:"Book of meow",
      author:"Meowington Jr",
      date:"The beginning of time."
    },
    {
      title:"Mew book",
      desc:"Book of meow",
      author:"Meowington Jr",
      date:"The beginning of time."
    },
    {
      title:"Potato book",
      desc:"Book of meow",
      author:"Meowington Jr",
      date:"The beginning of time."
    }
  ],
  [
    {
      title:"Magic book",
      desc:"Book of meow",
      author:"Meowington Jr",
      date:"The beginning of time."
    },
    {
      title:"Bad book",
      desc:"Book of meow",
      author:"Meowington Jr",
      date:"The beginning of time."
    },
    {
      title:"Scary book",
      desc:"Book of meow",
      author:"Meowington Jr",
      date:"The beginning of time."
    },
    {
      title:"How to play minecraft",
      desc:"Book of meow",
      author:"Meowington Jr",
      date:"The beginning of time."
    }
  ]
]

console.log(deweySearch(1,"How to play minecraft",DeweyBookIndex));
