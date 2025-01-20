export const countingSort = (array, setSteps) => {
    const steps = [];
    
    const max = Math.max(...array);
    const count = Array(max + 1).fill(0);
    const output = Array(array.length);
  
    for (let i = 0; i < array.length; i++) {
      count[array[i]]++;
    }
  
    for (let i = 1; i <= max; i++) {
      count[i] += count[i - 1];
    }
  
    for (let i = array.length - 1; i >= 0; i--) {
      output[count[array[i]] - 1] = array[i];
      count[array[i]]--;
    }
  
    for (let i = 0; i < array.length; i++) {
      array[i] = output[i];
      steps.push([...array]); // Save current step
    }
    
    return steps;
  };
  