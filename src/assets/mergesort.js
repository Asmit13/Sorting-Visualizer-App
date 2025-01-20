export const mergeSort = (array, dispatchVisualizer, speed) => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const merge = async (arr, left, mid, right) => {
    let leftArray = arr.slice(left, mid + 1);
    let rightArray = arr.slice(mid + 1, right + 1);
    let i = 0, j = 0, k = left;

    dispatchVisualizer({ type: "setComparing", indices: [left, mid, right] });

    while (i < leftArray.length && j < rightArray.length) {
      dispatchVisualizer({ type: "setComparing", indices: [left + i, mid + 1 + j] });
      if (leftArray[i] < rightArray[j]) {
        arr[k] = leftArray[i];
        i++;
      } else {
        arr[k] = rightArray[j];
        j++;
      }
      k++;
      dispatchVisualizer({ type: "setArray", array: [...arr] });
      await sleep(speed);
    }

    while (i < leftArray.length) {
      arr[k] = leftArray[i];
      i++;
      k++;
      dispatchVisualizer({ type: "setArray", array: [...arr] });
      await sleep(speed);
    }

    while (j < rightArray.length) {
      arr[k] = rightArray[j];
      j++;
      k++;
      dispatchVisualizer({ type: "setArray", array: [...arr] });
      await sleep(speed);
    }
  };

  const visualize = async (arr, left, right) => {
    if (left < right) {
      const mid = Math.floor((left + right) / 2);
      await visualize(arr, left, mid);
      await visualize(arr, mid + 1, right);
      await merge(arr, left, mid, right);
    }
    dispatchVisualizer({ type: "setRunning", value: false });
  };

  visualize(array, 0, array.length - 1);
};
