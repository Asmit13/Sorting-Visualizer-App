// src/algorithms/bubbleSort.js
export function bubbleSort(stateArray, dispatch, speed) {
  let array = stateArray.slice();
  let toDispatch = [];
  let sorted = false;
  let round = 0;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length - 1 - round; i++) {
      toDispatch.push({ type: "compare", indices: [i, i + 1] });

      if (array[i] > array[i + 1]) {
        toDispatch.push({ type: "swap", indices: [i, i + 1] });
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        sorted = false;
        toDispatch.push({ type: "update", array: array.slice() });
      }
    }

    toDispatch.push({ type: "sorted", index: array.length - 1 - round });
    round++;
  }

  // Handling the dispatch of steps to update the visualizer
  handleDispatch(toDispatch, dispatch, array, speed);
  return array;
}

function handleDispatch(toDispatch, dispatch, array, speed) {
  if (!toDispatch.length) {
    dispatch({ type: "setSorted", indices: array.map((_, index) => index) });
    dispatch({ type: "setRunning", value: false });
    return;
  }

  let step = toDispatch.shift();
  switch (step.type) {
    case "compare":
      dispatch({ type: "setComparing", indices: step.indices });
      break;
    case "swap":
      dispatch({ type: "setSwapping", indices: step.indices });
      break;
    case "update":
      dispatch({ type: "setArray", array: step.array });
      break;
    case "sorted":
      dispatch({ type: "setSorted", index: step.index });
      break;
    default:
      break;
  }

  setTimeout(() => {
    handleDispatch(toDispatch, dispatch, array, speed);
  }, speed);
}
