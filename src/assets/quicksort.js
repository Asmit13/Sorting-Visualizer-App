export const quickSort = async (array, dispatch, speed, setPivot) => {
  const quickSortHelper = async (arr, low, high) => {
    if (low < high) {
      const pi = await partition(arr, low, high);
      await quickSortHelper(arr, low, pi - 1);
      await quickSortHelper(arr, pi + 1, high);
    }
  };

  const partition = async (arr, low, high) => {
    const pivot = arr[high];
    setPivot(pivot);  // Update pivot
    let i = low - 1;
    for (let j = low; j <= high - 1; j++) {
      dispatch({ type: "setComparing", indices: [i + 1, j] });
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
        dispatch({ type: "setSwapping", indices: [i, j] });
        await new Promise((resolve) => setTimeout(resolve, speed));
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    dispatch({ type: "setSwapping", indices: [i + 1, high] });
    await new Promise((resolve) => setTimeout(resolve, speed));
    dispatch({ type: "setArray", array: arr });
    return i + 1;
  };

  await quickSortHelper(array, 0, array.length - 1);
  dispatch({ type: "setRunning", value: false });
};
