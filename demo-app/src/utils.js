export const nanToValue = (x) => {
  if (isNaN(x)) {
    return '';
  } else {
    return x;
  }
};

export const valueToNaN = (x) => {
  if (x.length === 0) {
    return NaN;
  } else {
    return Number(x);
  };
}