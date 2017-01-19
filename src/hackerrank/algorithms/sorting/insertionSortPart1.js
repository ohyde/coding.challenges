const array = [2, 4, 6, 8, 3];


function insertionSort(unsortedList) {
  for (let i = unsortedList.length - 1; i >= 0; i--) {
    let tmp = unsortedList[i];

    for (var j = i - 1; j >= 0 && (unsortedList[j] > tmp); j--) {
      unsortedList[j + 1] = unsortedList[j];
    }

    unsortedList[j + 1] = tmp;
  }

  return unsortedList;
}

console.log(insertionSort(array));
