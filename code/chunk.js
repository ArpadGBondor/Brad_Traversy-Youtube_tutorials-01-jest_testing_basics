const chunk = (arr, len) => {
  // Init chunked arr
  const chunkedArr = [];

  // loop through arr
  arr.forEach((val) => {
    // Get last element
    const last = chunkedArr[chunkedArr.length - 1];

    //Check if last and last length is equal to the chunk len
    if (!last || last.length == len) {
      chunkedArr.push([val]);
    } else {
      last.push(val);
    }
  });

  return chunkedArr;
};

module.exports = chunk;
