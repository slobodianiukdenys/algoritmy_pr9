let min = -10000;
let max = 10000;
let elements = 10000;
let arr = [];

function quickSort(arr, direction) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (i === Math.floor(arr.length / 2)) continue; 

      if (direction) { 
        if (arr[i] < pivot) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      } else { 
        if (arr[i] > pivot) {
          left.push(arr[i]);
        } else {
          right.push(arr[i]);
        }
      }
    }
      return [...quickSort(left, direction), pivot, ...quickSort(right, direction)];
}

function getRandomInt() {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


function sortMethod(){
    for(let i = 0; i < elements; i++){
        arr.push(getRandomInt());
    }
    arr = quickSort(arr, false)
    console.log(arr)
    console.log(arr[5])
}

function top6Method(){
    for(let i = 0; i < elements; i++){
        let current = 0;
        arr = quickSort(arr, false);
        if(arr.length < 6){
        arr.push(getRandomInt());
        }else{
            current = getRandomInt();
            if (current > arr[5]){
                arr[5] = current; 
            }
        }
    }
    console.log(arr)
    console.log(arr[5])
}

function findBiggestMethod(){
    let current = 0;
    let indexOfBiggest = 0;
    let biggest = 0;
    for(let i = 0; i < elements; i++){
        arr.push(getRandomInt());
    }
    
    for(let i = 0; i < 6; i++){
        current = 0;
        for(let i = 0; i < elements; i++){
            if(current < arr[i]){
                current = arr[i];
                indexOfBiggest = i;
            }
        }

    if(i < 5){
        arr[indexOfBiggest] = -999999999999999;  
    }else{
        biggest = arr[indexOfBiggest];
    }

    }
    console.log(arr);
    console.log(biggest);
}




let time = performance.now();
//sortMethod();
//top6Method();
findBiggestMethod();
time = performance.now() - time;
time = time.toFixed(1)
console.log('Время выполнения = ', time);