const fs = require('fs');
/**
* @description : taking array
* @param {int}, which has data information
* @return {data}, returning sorted array
*/
exports.arraySort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                // copied to temp memory
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
/*--------------------------------------------------------------------------------------------*/
exports.binarySearchInt = (arr, key) => {
    var start = 0, end = arr.length - 1;
    while (start <= end) {
        mid = parseInt((start + end) / 2);
        if (key == parseInt(arr[mid])) {
            console.log('element found at position  ' + mid);
            break;
        }
        else if (key < parseInt(arr[mid])) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }

    }
    if (start > end) {
        console.log('element not found ');
    }
}
/*------------------------------------------------------------------------------------------------*/
exports.binarySearchString = (s, key) => {
    var start = 0;

    arr = s.split(' ');
    arr = arr.sort();

    var end = arr.length;
    var mid = parseInt((start + end) / 2);

    while (start <= end) {

        if (arr[mid] == key) {
            console.log('element found at position  ' + mid);
            break;
        }
        else if (arr[mid] > key) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
        mid = parseInt((start + end) / 2);

    }
    if (start > end) {
        console.log('element not found ');
    }

}
/*------------------------------------------------------------------------------------------------*/
exports.insertionSortInt = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        var key = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    console.log(arr);

}
/*------------------------------------------------------------------------------------------------------------*/

exports.insertionSortString = (string) => {
    arr = string.split(' ');
    for (let i = 1; i < arr.length; i++) {
        var key = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    console.log(arr.join(' '));

}
/*-----------------------------------------------------------------------------------------------------*/
exports.bubbleSortInt = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

            }

        }

    }
    console.log(arr);
}
/*----------------------------------------------------------------------------------------------------*/
exports.bubbleSortString = (string) => {
    arr = string.split(' ');
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

            }

        }

    }
    console.log(arr.join(' '));
}
/*----------------------------------------------------------------------------------------------------*/
exports.readFile = (filepath) => {
    text = fs.readFileSync(filepath);
    arr = text.toString().split(' ');
    return arr;
}
/*----------------------------------------------------------------------------------------------------*/
exports.writeFile = (filepath, arr) => {
    fs.writeFileSync(filepath, arr.join(" "));
}
/*----------------------------------------------------------------------------------------------------*/









