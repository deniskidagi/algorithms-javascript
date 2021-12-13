//given two arrays create a function that lets a user know (true/false)
// whether these two arrays contain any common items
//eg
// const array1 = ['a', 'b', 'c', 'x']
// const array2 = ['z', 'y', 'i']
//should return false

//const array1 = ['a', 'b', 'c', 'x']
//const array2 = ['z', 'y', 'x']
//should return true


//solution naive approach
function checkPair(arr1, arr2){
    for (let i=0; i<arr1.length; i++){
        for (let j=0; j<arr2.length; j++){
            if(arr1[i] === arr2[j]){
                return true
            }
        }
    }
    return false
}
o=(a*b)
console.log(checkPair(array1, array2))

//solution best case
const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'x']
function checkPair(arr1, arr2){
    let map = {}
    for(let i=0; i<arr1.length; i++){
        if(!map[arr1[i]]){
            const item = arr1[i]
            map[item] = true
        }
    }
    for(let j=0; j<arr1.length; j++){
        if(map[arr2[j]]){
            return true
        }
    }
    return false
}
o = (a+b)
console.log(checkPair(array1, array2))

//solution using javascript inbuilt functions
const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'i']
function checkPair(arr1, arr2){
    return arr1.some(item => arr2.includes(item))
}
console.log(checkPair(array1, array2))