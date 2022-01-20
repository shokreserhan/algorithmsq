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

// let mergeSort = function(arr){
//     let mid = arr.length / 2
    
//     if(arr.length <= 1){
//         return arr
//     }else{
//         return merge(mergeSort(arr.splice(0,mid)), mergeSort(arr))
//     }
// }

// let merge = function(leftArray, rightArray){
//     let sortedArr = []
    
//     while(leftArray.length || rightArray.length){
//         if(leftArray.length && rightArray.length){
//             if(leftArray[0] < rightArray[0]){
//                 sortedArr.push(leftArray.shift())
//             }else{
//                 sortedArr.push(rightArray.shift())
//             }
//         }else if(rightArray.length){
//             sortedArr.push(rightArray.shift())
//         }else if(leftArray.length){
//             sortedArr.push(leftArray.shift())
//         }
//     }
//     return sortedArr;
// }

// let arr = [11,1,2,10,5,4,6,7,8,2,9,3,4,1,1,1,1,1];

// console.log(mergeSort(arr))


const deepCloneObj = (obj) => {
    let result = {}
    let tempArray = []
    Object.keys(obj).forEach(key => {
        // console.log(typeof obj[key]);
        if(typeof obj[key] !== "object"){
            result[key] = obj[key]
        }else{
            if(Array.isArray(obj[key])){
                obj[key].forEach((element,i) => {
                    if(typeof element !== "object"){
                        tempArray[i] = element
                    }
                    else{
                        let tempObj = deepCloneObj(element)
                        if(Array.isArray(element)){
                            tempArray[i] = Object.values(tempObj)
                        }
                        else{
                            tempArray[i] = tempObj
                        }
                    }
                })
                console.log(tempArray);
                result[key] = Object.values(tempArray)
            }
            else{
                result[key] = deepCloneObj(obj[key])
            }
        }
    })
    return result
}

const user ={
    id: 123,
    name: "Ameer",
    phone: [123, {a:1, c:{t: [1,2,3] }, b:2} , [1,{c:5},2,3] , 456, 789],
    address: {
        country: "Israel", 
        city: {
            street:1,
            house:3
        }
    }
}

let tempObj = deepCloneObj(user)

// user.phone[0] = 5
// user.address.country = "LA"
// user.address.city.street = 8
// user.phone[1].a = 3
// user.phone[2][0] = 4
// user.phone[1].c[2] = 45
user.phone[1].c.t[2] = 45

user.phone[2][1].c = 10


user.id = 123456

console.log(user)

console.log(tempObj)
console.log("aa");