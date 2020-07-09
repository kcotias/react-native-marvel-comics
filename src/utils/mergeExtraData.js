function areInputsEqual(newInputs, lastInputs) {
  for (let i = 0; i < newInputs.length; i++) {
    // using shallow equality check
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }
  return true;
}

let lastArgs = [];
let lastResult = 0;

export default function mergeExtraData(...newArgs) {
  if (areInputsEqual(newArgs, lastArgs)) {
    return lastResult;
  }
  // Something shallowly changed - return a new number from [0-10]
  lastResult = lastResult === 10 ? 0 : lastResult + 1;
  lastArgs = newArgs;
  return lastResult;
}
