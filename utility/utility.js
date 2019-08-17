const fs = require('fs');
/**
* @description : taking array
* @param {int}, which has data information
* @return {data}, returning sorted array
*/
exports.arraySort = (arr) => {
    try {
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
    } catch (e) {
        console.log(e);
    }
    return arr;
}
/*--------------------------------------------------------------------------------------------*/
exports.binarySearchInt = (arr, key) => {
    try {
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
    } catch (e) {
        console.log(e);
    }
}
/*------------------------------------------------------------------------------------------------*/
exports.binarySearchString = (s, key) => {
    try {
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

    } catch (e) {
        console.log(e);
    }
}
/*------------------------------------------------------------------------------------------------*/
exports.insertionSortInt = (arr) => {
    try {
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

    } catch (e) {
        console.log(e);
    }
}
/*------------------------------------------------------------------------------------------------------------*/

exports.insertionSortString = (string) => {
    try {
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

    } catch (e) {
        console.log(e);
    }
}
/*-----------------------------------------------------------------------------------------------------*/
exports.bubbleSortInt = (arr) => {
    try {
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
    } catch (e) {
        console.log(e);
    }
}
/*----------------------------------------------------------------------------------------------------*/
exports.bubbleSortString = (string) => {
    try {
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
    } catch (e) {
        console.log(e);
    }
}
/*----------------------------------------------------------------------------------------------------*/
exports.readFile = (filepath) => {
    try {
        text = fs.readFileSync(filepath);
        arr = text.toString().split(' ');
        return arr;
    } catch (e) {
        console.log(e);
    }
}
/*----------------------------------------------------------------------------------------------------*/
exports.writeFile = (filepath, arr) => {
    try {
        fs.writeFileSync(filepath, arr.join(" "));
    } catch (e) {
        console.log(e);
    }
}
/*----------------------------------------------------------------------------------------------------*/









