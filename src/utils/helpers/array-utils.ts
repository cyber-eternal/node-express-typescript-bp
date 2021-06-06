/**
 * Creates an array of elements split into groups the length of size.
 * @param {*} input
 * @param {*} size
 * @returns {*}
 */
export const chunk = (input: any[], size: number) => {
  return input.reduce((arr, item, idx) => {
    return idx % size === 0 ? [...arr, [item]] : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
  }, []);
};

export const mergeByKey = (array: any[], target: any[], key: string) => {
  return [...array, ...target].reduce((acc, val) => {
    const i = acc.findIndex((o: any) => o[key] === val[key]);

    if (i !== -1) {
      acc[i] = { ...acc[i], ...val };

      return acc;
    } else {
      return acc.concat(val);
    }
  }, []);
};
