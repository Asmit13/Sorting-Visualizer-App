export const selectionSort = (array, dispatchVisualizer, speed) => {
  let n = array.length;
  let sortedIndices = [];

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const visualize = async () => {
    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      dispatchVisualizer({ type: "setComparing", indices: [i] });

      // Find the smallest element in unsorted portion
      for (let j = i + 1; j < n; j++) {
        dispatchVisualizer({ type: "setComparing", indices: [j, i] });
        if (array[j] < array[minIdx]) {
          minIdx = j;
        }
        await sleep(speed);
      }

      // Swap the found smallest element with the first element
      if (minIdx !== i) {
        dispatchVisualizer({ type: "setSwapping", indices: [i, minIdx] });
        [array[i], array[minIdx]] = [array[minIdx], array[i]];
        dispatchVisualizer({ type: "setArray", array: [...array] });
        await sleep(speed);
      }

      // After each iteration, mark the current index as sorted
      sortedIndices.push(i);
      dispatchVisualizer({ type: "setSorted", indices: sortedIndices });
      await sleep(speed);
    }

    // Mark the last element as sorted
    sortedIndices.push(n - 1);
    dispatchVisualizer({ type: "setSorted", indices: sortedIndices });
    dispatchVisualizer({ type: "setRunning", value: false });
  };

  visualize();
};
