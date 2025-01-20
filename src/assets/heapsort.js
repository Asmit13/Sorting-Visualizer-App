export const heapSort = (array, dispatchVisualizer, speed) => {
  let n = array.length;

  // Heapify function to maintain the heap property (max-heap)
  const heapify = (arr, n, i) => {
    let largest = i; // Initialize largest as root
    let left = 2 * i + 1; // Left child
    let right = 2 * i + 2; // Right child

    // Check if left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    // Check if right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    // If largest is not root, swap and continue heapifying
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];  // Swap
      dispatchVisualizer({ type: 'setSwapping', indices: [i, largest] }); // Visualize swap
      dispatchVisualizer({ type: 'setArray', array: [...arr] }); // Update array state for visualization
      setTimeout(() => {
        heapify(arr, n, largest); // Recursively heapify the affected subtree
      }, speed);
    }
  };

  // Build a max heap (rearrange array into max-heap)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i);
  }

  // One by one extract elements from the heap
  for (let i = n - 1; i >= 0; i--) {
    // Move current root (largest) to the end
    [array[0], array[i]] = [array[i], array[0]];  // Swap
    dispatchVisualizer({ type: 'setSwapping', indices: [0, i] }); // Visualize swap
    dispatchVisualizer({ type: 'setArray', array: [...array] }); // Update array state for visualization

    // Call heapify on the reduced heap
    setTimeout(() => {
      heapify(array, i, 0); // Re-heapify the root element
    }, speed);
  }

  // Mark all elements as sorted (for visualization)
  dispatchVisualizer({ type: 'setSorted', indices: Array.from({ length: n }, (_, index) => index) });

  // After sorting is done, stop the sorting process
  setTimeout(() => {
    dispatchVisualizer({ type: 'setRunning', value: false });
  }, speed * n);
};
