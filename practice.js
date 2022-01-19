// Q1
// How would you make this work?
// add(2, 5) //7
// add(2)(5) //7

// function add1(num1, num2) {
//     return num1 + num2 ;
// }

// function add2(num1){
//     return num2 => {
//         return num1 + num2;
//     }
// }

// console.log(add1(2, 5));
// console.log(add2(2)(5));

// Q2
// Create the deepClone function (including nested objects)

// function deepClone(obj){

//     let cloned = JSON.parse(JSON.stringify(obj));
//     return cloned
// }

// const user ={
//     id: 123,
//     name: "Ameer",
//     phone: [123, 456, 789],
//     address: {
//         country: "Israel", 
//         city: {
//             street:1,
//             house:3
//         }
//     }
// }

// let cloned = deepClone(user)

// const clonedUser = {...user}
// clonedUser.address["a"] = 1
// clonedUser.address.city["b"] = 2

// console.log(user)
// console.log(cloned);


//Q3 
//Implement Merge Sort

let mergeSort = function(arr){
    let mid = arr.length / 2
    
    if(arr.length <= 1){
        return arr
    }else{
        return merge(mergeSort(arr.splice(0,mid)), mergeSort(arr))
    }
}

let merge = function(leftArray, rightArray){
    let sortedArr = []
    
    while(leftArray.length || rightArray.length){
        if(leftArray.length && rightArray.length){
            if(leftArray[0] < rightArray[0]){
                sortedArr.push(leftArray.shift())
            }else{
                sortedArr.push(rightArray.shift())
            }
        }else if(rightArray.length){
            sortedArr.push(rightArray.shift())
        }else if(leftArray.length){
            sortedArr.push(leftArray.shift())
        }
    }
    return sortedArr;
}

let arr = [11,1,2,10,5,4,6,7,8,2,9,3,4,1,1,1,1,1];

console.log(mergeSort(arr))