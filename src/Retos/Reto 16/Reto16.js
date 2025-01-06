function removeSnow(s) {
  const stack = [];

  for (const snow of s) {
    if (stack.at(-1) === snow) {
      stack.pop();
    } else {
      stack.push(snow);
    }
  }

  return stack.join("");
}
