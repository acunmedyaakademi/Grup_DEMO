export const addObj = (obj, value) => {
  let newObj = [...obj];

  if (newObj.find((item) => item === value)) {
    return (newObj = newObj.filter((item) => item !== value));
  } else {
    newObj = [...newObj, value];
  }

  return newObj;
};

export const discountedPrice = (price, discount) => {
  return (price - (price * discount) / 100).toFixed(2);
};
