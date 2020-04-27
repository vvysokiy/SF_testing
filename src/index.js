
export const sum = (a, b) => a + b;


export const cropText = (str, length = 30, postfix = '...') => {
  if (str.length > length) {
    const postfixLength = postfix.length;

    const newStr = str.slice(0, length - postfixLength);
    console.log('cropText -> newStr', newStr);

    return `${newStr}${postfix}`;
  }

  return str;
};