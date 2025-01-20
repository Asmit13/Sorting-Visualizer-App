import React, { useState } from "react";
import { bubbleSort } from "../assets/bubblesort";
import { insertionSort } from "../assets/insertionsort";
import { selectionSort } from "../assets/selectionsort";
import { mergeSort } from "../assets/mergesort";
import { quickSort } from "../assets/quicksort"; 

const sortingAlgorithms = {
  bubbleSort: `public void bubbleSort(int[] arr) {
    for (int i = 0; i < arr.length - 1; i++) {
      for (int j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          int temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  }`,

  insertionSort: `public void insertionSort(int[] arr) {
    for (int i = 1; i < arr.length; i++) {
      int key = arr[i];
      int j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = key;
    }
  }`,

  mergeSort: `static void merge(int arr[], int l, int m, int r){
        int n1 = m - l + 1;
        int n2 = r - m;

        int L[] = new int[n1];
        int R[] = new int[n2];

        for (int i = 0; i < n1; ++i)
            L[i] = arr[l + i];
        for (int j = 0; j < n2; ++j)
            R[j] = arr[m + 1 + j];


        int i = 0, j = 0;

        int k = l;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            }
            else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    static void sort(int arr[], int l, int r)
    {
        if (l < r) {

            // Find the middle point
            int m = l + (r - l) / 2;

            // Sort first and second halves
            sort(arr, l, m);
            sort(arr, m + 1, r);

            // Merge the sorted halves
            merge(arr, l, m, r);
        }
    
`,
quickSort: `public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            
            // Display the array after partitioning
            System.out.println("Array after partitioning: " + Arrays.toString(arr));

            // Recursively sort elements before and after partition
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    // Partition function
    private static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];  // pivot element is taken as last element
        int i = (low - 1); // index of smaller element

        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                // Swap arr[i] and arr[j]
                swap(arr, i, j);
                System.out.println("Array after swapping: " + Arrays.toString(arr));  // Display after each swap
            }
        }
        // Swap arr[i + 1] and arr[high] (or pivot)
        swap(arr, i + 1, high);
        System.out.println("Array after swapping with pivot: " + Arrays.toString(arr));  // Display after pivot swap
        return i + 1;
    }

    `,

    selectionSort: `public static void selectionSort(int[] arr) {
        int n = arr.length;
        
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            
            // Find the minimum element in unsorted array
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            
            // Swap the found minimum element with the first element
            if (minIndex != i) {
                swap(arr, i, minIndex);
                System.out.println("Array after swapping: " + Arrays.toString(arr));  // Display after each swap
            }
        }
    }`



};

export default function SortingVisualizer() {
  const [array, setArray] = useState([16,14,12,13,12,5,4,3,2,17,15,4,8,7,6,1]);
  const [currentComparing, setCurrentComparing] = useState([]);
  const [currentSwappers, setCurrentSwappers] = useState([]);
  const [sortedIndices, setSortedIndices] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [algorithm, setAlgorithm] = useState("bubbleSort");
  const [pivot, setPivot] = useState(null); 
  const [temp, setTemp] = useState(null); 
  const [isComplete, setIsComplete] = useState(false);

  const handleInputChange = (e) => {
    const input = e.target.value
      .split(",")
      .map((num) => parseInt(num.trim()))
      .filter((num) => !isNaN(num));
    setArray(input);
  };

  
const dispatchVisualizer = (action) => {
  switch (action.type) {
    case "setArray":
      setArray(action.array);
      break;
    case "setComparing":
      setCurrentComparing(action.indices);
      break;
    case "setSwapping":
      setCurrentSwappers(action.indices);
      break;
    case "setSorted":
      setSortedIndices(action.indices || []);
      break;
    case "setRunning":
      setIsRunning(action.value);
      break;
    case "setTemp":
      setTemp(action.value);
      break;
    case "setComplete":
      gradualGreenEffect();
      break;
    default:
      break;
  }
};

const gradualGreenEffect = () => {
  let index = 0;
  const intervalId = setInterval(() => {
    setSortedIndices((prevSortedIndices) => [...prevSortedIndices, index]);
    index += 1;
    if (index >= array.length) {
      clearInterval(intervalId);
    }
  }, 100); 
};

const startSorting = (speed) => {
  setIsRunning(true);
  switch (algorithm) {
    case "bubbleSort":
      bubbleSort(array, dispatchVisualizer, speed);
      break;
    case "insertionSort":
      insertionSort(array, dispatchVisualizer, speed);
      break;
    case "selectionSort":
      selectionSort(array, dispatchVisualizer, speed);
      break;
    case "mergeSort":
      mergeSort(array, dispatchVisualizer, speed);
      break;
    case "quickSort":
      quickSort(array, dispatchVisualizer, speed, setPivot, setTemp);
      break;
    default:
      break;
  }
  setIsComplete(true);
  dispatchVisualizer({ type: "setComplete" }); 
};

  const renderBars = () => {
    return array.map((value, index) => {
      let color = "bg-blue-500"; 
      let barStyle = {}; 
   

      if (currentComparing.includes(index)) {
        color = "bg-yellow-500"; 
        barStyle = {
          transform: "scale(1.1)",
          height:`${value} * 100 px`
        }; 
      } else if (currentSwappers.includes(index)) {
        color = "bg-red-500"; 
        barStyle = {
          transform: "scale(1.1)",
        }; 
      } else if (sortedIndices.includes(index)) {
        color = "bg-green-500"; 
      }
      

      return (
        <div
          key={index}
          className={`w-12 mx-1 rounded-lg ${color}`}
          style={{
            ...barStyle,
            transition: "background-color 0.3s, transform 0.5s", 
            height: `${value * 30}px`,
            display: "flex",
          justifyContent: "center", 
          alignItems: "center",
          }}
        >
          <span className="text-center text-white">{value}</span>
        </div>
      );
    });
  };

  return (
    <div className="p-6 flex flex-col items-center bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl my-32 font-bold mb-6 text-center">
        Sorting Algorithm Visualizer
      </h1>

      <div className="mb-4 flex items-center space-x-4">
        <input
          type="text"
          placeholder="Enter numbers (comma-separated)"
          className="p-2 border border-gray-300 rounded-md outline-blue-500 text-black w-[85vh]"
          onChange={handleInputChange}
          disabled={isRunning}
        />
        <select
          className="p-2 border text-black border-gray-300 rounded-md"
          onChange={(e) => setAlgorithm(e.target.value)}
          value={algorithm}
          disabled={isRunning}
        >
          <option value="bubbleSort">Bubble Sort</option>
          <option value="insertionSort">Insertion Sort</option>
          <option value="selectionSort">Selection Sort</option>
          <option value="mergeSort">Merge Sort</option>
          <option value="quickSort">Quick Sort</option>
        </select>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:opacity-50"
          onClick={() => startSorting(700)}
          disabled={isRunning}
        >
          Start {algorithm.split(/(?=[A-Z])/).join(" ")}
        </button>
      </div>

      {algorithm === "quickSort" && pivot !== null && (
        <div className="mb-4">
          <p className="text-lg">Current Pivot: {pivot}</p>
          {temp !== null && (
            <p className="text-lg">Temporary Element: {temp}</p>
          )}
        </div>
      )}

      <div className="mt-6 flex justify-center items-end">
        {renderBars()}
      </div>

      <div className="mt-8 w-full bg-gray-800 p-4 rounded-md">
        <h2 className="text-2xl mb-4">Algorithm Code</h2>
        <pre className="text-white font-mono overflow-x-auto">
          {sortingAlgorithms[algorithm]}
        </pre>
      </div>
    </div>
  );
}
