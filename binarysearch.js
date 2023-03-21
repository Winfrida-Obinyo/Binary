
function merge(first, last) {
    let sortedArr = []
        while (first.length && last.length){
      if (left[0] < last[0]) {
        sortedArr.push(first.shift())
      } else {
        sortedArr.push(last.shift())
      }
    }
    return [...sortedArr, ...first, ...last]
  }

function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let first= mergeSort(arr.slice(0, mid))
    let last = mergeSort(arr.slice(mid))
    return merge(first,last);  
     console.log( merge(first, last));
  }
  let arr = [45,12,6,89,2,5];
  console.log(mergeSort(arr));


  function binary(arr, target){
    let firstIndex= 0;
    let lastIndex = arr.length-1;
    
    while(firstIndex <= lastIndex){

        let middle = Math.floor((firstIndex+lasttIndex)/2);
        if (arr[middle] === target){
            return middle;
        }
        else if(arr[middle]>target){
            lastIndex = middle-1
        }
        else{
            firstIndex=middle+1
        }
    }
    return null;
}
let num = arr;
let target = 6;
console.log(binary(num,target));



function merge(first, last) {
    let sortedArr1 = []
        while (first.length && last.length){
      if (first[0] > last[0]) {
        sortedArr1.push(first.shift())
      } else {
        sortedArr1.push(last.shift())
      }
    }
    return [...sortedArr1, ...first, ...last]
  }

function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let first = mergeSort(arr.slice(0, mid))
    let last = mergeSort(arr.slice(mid))
    return merge(first,last);  
     console.log( merge(first, last));
  }
  let arrs = [[123,89,5,23,9,56]];
  console.log(mergeSort(arrs));



function merge(first, last) {
    let sortedArr2 = []
        while (first.length && last.length){
      if (first[0] < last[0]) {
        sortedArr2.push(first.shift())
      } else {
        sortedArr2.push(first.shift())
      }
    }
    return [...sortedArr2, ...first, ...last]
  }

function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length / 2)
    let first = mergeSort(arr.slice(0, mid))
    let last = mergeSort(arr.slice(mid))
    return merge(first,last);  
     console.log( merge(left, right));
  }

  let arr2 = [1,4,78,2,67,3];
  console.log(mergeSort(arr2));



  function binary(arr, target){
    let firstIndex= 0;
    let lastIndex = arr.length-1;
    
    while(firstIndex <= lastIndex){

        let center = Math.floor((firstIndex+lasttIndex)/2);
        if (arr[center] === target){
            return center;
        }
        else if(arr[center]>target){
            lastIndex = center-1
        }
        else{
            firstIndex=center+1
        }
    }
    return null;
}
let targett = 34;
console.log(binary(arr2,target));
