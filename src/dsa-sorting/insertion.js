const insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++){
        let temp = arr[i]
        let j = i - 1;
        console.log(temp, arr[j])
        while(j >= 0 && arr[j] > temp){
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = temp;
    }
    return arr
}

module.exports = insertionSort;