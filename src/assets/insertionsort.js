export const insertionSort = (array, dispatchVisualizer, speed) => {
  let n = array.length;
  let sortedIndices = [];
  
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  
  const visualize = async () => {
    for (let i = 1; i < n; i++) {
      let key = array[i];
      let j = i - 1;

      dispatchVisualizer({ type: "setComparing", indices: [i] });
      dispatchVisualizer({ type: "setTemp", value: key });

      while (j >= 0 && array[j] > key) {
        dispatchVisualizer({ type: "setComparing", indices: [j, i] });
        
        // Animate the element coming out of the array
        dispatchVisualizer({ type: "setSwapping", indices: [j, j + 1] });
        [array[j + 1], array[j]] = [array[j], array[j + 1]];

        dispatchVisualizer({ type: "setArray", array: [...array] });
        await sleep(speed);

        j--;
      }

      // Insert the key in its correct position
      array[j + 1] = key;
      dispatchVisualizer({ type: "setArray", array: [...array] });
      sortedIndices.push(i);

      dispatchVisualizer({ type: "setSorted", indices: sortedIndices });
      await sleep(speed);
    }

    dispatchVisualizer({ type: "setRunning", value: false });
  };

  visualize();
};
