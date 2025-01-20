export const radixSort = (array, setSteps) => {
    const steps = [];
    
    const getMax = (arr) => Math.max(...arr);
    const countSort = (arr, exp) => {
      const output = Array(arr.length);
      const count = Array(10).fill(0);
    
      for (let i = 0; i < arr.length; i++) {
        count[Math.floor(arr[i] / exp) % 10]++;
      }
    
      for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
      }
    
      for (let i = arr.length - 1; i >= 0; i--) {
        const digit = Math.floor(arr[i] / exp) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
      }
    
      for (let i = 0; i < arr.length; i++) {
        arr[i] = output[i];
      }
    };
  
    const max = getMax(array);
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
      countSort(array, exp);
      steps.push([...array]); // Save each step
    }
  
    return steps;
  };
  