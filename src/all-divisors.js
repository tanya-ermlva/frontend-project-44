const getAllDivisors = (anyNumber) => {
  let result = 0;
  const resultArr = [];
  let count = anyNumber;
  while (count > 0) {
    result = anyNumber % count;
    if (result === 0) {
      resultArr.push(count);
      count -= 1;
    } else {
      count -= 1;
    }
  } return resultArr;
};

export default getAllDivisors;
