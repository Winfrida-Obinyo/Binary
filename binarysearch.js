


function merge(left, right) {
  let exists = []
      while (left.length && right.length){
    if (left[0] < right[0]) {
      exists.push(left.shift())
    } else {
      exists.push(right.shift())
    }
  }
  return [...exists, ...left, ...right]
}

function mergeArrange(arr) {
  if (arr.length <= 1) return arr
  let middle = Math.floor(arr.length / 2)
  let left = mergeArrange(arr.slice(0, mid))
  let right = mergeArrange(arr.slice(middle))
  return merge(left,right);  
   console.log( merge(left, right));
}
let arr = [45,12,6,89,2,5];
console.log(mergeArrange(arr));


function binary(arr, target){
  let leftIndex= 0;
  let rightIndex = arr.length-1;
  
  while(leftIndex <= rightIndex){

      let middle = Math.floor((leftIndex+rightIndex)/2);
      if (arr[middle] === target){
          return middle;
      }
      else if(arr[middle]>target){
          rightIndex = middle-1
      }
      else{
          leftIndex=middle+1
      }
  }
  return null;
}
let num = arr;
let target = 6;
console.log(binary(num,target));

function merge(left, right) {
  let sortedArr1 = []
      while (left.length && right.length){
    if (left[0] > right[0]) {
      sortedArr1.push(left.shift())
    } else {
      sortedArr1.push(right.shift())
    }
  }
  return [...sortedArr1, ...left, ...right]
}

function mergeArrange(arr) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeArrange(arr.slice(0, mid))
  let right = mergeArrange(arr.slice(mid))
  return merge(left,right);  
   console.log( merge(left, right));
}
let arrs = [[123,89,5,23,9,56]];
console.log(mergeArrange(arrs));

