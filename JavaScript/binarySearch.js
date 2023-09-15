function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    //  console.log(right)
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
        // console.log(mid)
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1;
  }
  
  // Test the function
  const inputArray = [1, 2, 3, 4,5,6,7,9,8];
  const targetValue = 0;
  const output = binarySearch(inputArray, targetValue);
  console.log(output);  // Output: 4

  