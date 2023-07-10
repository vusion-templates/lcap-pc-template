export const findAsync = async (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    const result = await callback(arr[i], i, arr);
    if (result) {
      return arr[i];
    }
  }
  return undefined;
};

export const mapAsync = async (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const mappedValue = await callback(arr[i], i, arr);
    result.push(mappedValue);
  }
  return result;
};

export const filterAsync = async (arr, callback) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const filteredValue = await callback(arr[i], i, arr);
    result.push(filteredValue);
  }
  return result;
};

export const findIndexAsync = async (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    const result = await callback(arr[i], i, arr);
    if (result) {
      return i;
    }
  }
  return -1;
};

export const quickSortAsync = async (arr, compareFn) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivotIndex = Math.floor(arr.length / 2);
  const pivotValue = arr[pivotIndex];

  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) {
      continue;
    }

    const currentItem = arr[i];
    const comparisonResult = await compareFn(currentItem, pivotValue);

    if (comparisonResult < 0) {
      left.push(currentItem);
    } else {
      right.push(currentItem);
    }
  }

  const sortedLeft = await quickSortAsync(left, compareFn);
  const sortedRight = await quickSortAsync(right, compareFn);

  arr.splice(0, arr.length, ...sortedLeft, pivotValue, ...sortedRight);

  return arr;
};
