export const bucketSort = (array, setSteps) => {
    const steps = [];
    
    const bucketCount = Math.floor(array.length / 5);
    const buckets = Array.from({ length: bucketCount }, () => []);
    
    const min = Math.min(...array);
    const max = Math.max(...array);
  
    const bucketRange = (max - min) / bucketCount;
  
    for (let i = 0; i < array.length; i++) {
      const index = Math.floor((array[i] - min) / bucketRange);
      buckets[index].push(array[i]);
    }
  
    for (let i = 0; i < bucketCount; i++) {
      buckets[i].sort((a, b) => a - b); // Sort each bucket
      steps.push([...buckets[i]]);
    }
  
    const result = [].concat(...buckets);
    for (let i = 0; i < result.length; i++) {
      array[i] = result[i];
    }
  
    steps.push([...array]); // Save final sorted array
    return steps;
  };
  