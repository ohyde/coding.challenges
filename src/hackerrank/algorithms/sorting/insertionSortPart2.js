function processData(input) {
    const [sizeString, array] = input.split("\n");
    const size = parseInt(sizeString);
    let arr = R.compose(
        R.map(parseInt),
        R.split(" ")
    )(array);
 
    for (i = 1; i <= size - 1; i += 1){
        const toSort = arr.slice(0, i + 1);
        const rest = arr.slice(i + 1, size)
        arr = insertionSort(toSort).concat(rest);
        console.log(arr.join(' '));
    } 
}
 
function insertionSort(arr) {
    const e = arr[arr.length - 1];
    for(let i=arr.length-2; i>=0; i--) {
        let value = arr[i];
        if (value > e) {
            arr[i + 1] = value;
            if (i === 0) {
                arr[i] = e;
            }
        } else if (value < e) {
            arr[i + 1] = e;
            break;
        }
    }
    return arr
}


const exampleInput = "6\n1 4 3 5 6 2"

console.log(processData(exampleInput))
