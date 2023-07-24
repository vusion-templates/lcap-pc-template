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

export const sortAsync = (array = [], sortRule) => async (callback) => {
  const promises = array.map(callback);
  const list = await Promise.all(promises);

  const reset = (current, index) => {
    array[index] = current;
    return current;
  };

  return list.sort(sortRule).map(reset);
};
