console.log("linear_search");

const arr = [1, 7, 6, 8, 9, 10, 4, 3];

const linear = (array, tobe) => {


    for (let a = 0; a < array.length; a++) {


        if (arr[a] == tobe) {

            console.log(a)
        }


    }

}

linear(arr, 6)