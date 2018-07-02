function isEqual(a,b){

    function compareArrays(a,b){
        if (a.length === b.length){
            for (var i=0; i<a.length; i++){
                if (a[i] !== b[i]){
                    return false
                }
            }
            return true
        }
        return false
    }

    function compareObjects(a,b){
        let propOne = Object.keys(a)
        let propTwo = Object.keys(b)

        let valueOne = Object.values(a)
        let valueTwo = Object.values(b)
        
        if (propOne.length === propTwo.length) {
            for (var i=0; i < propTwo.length; i++){
                if (propOne[i] !== propTwo[i]){
                    return false
                }
                if (valueOne[i] !== valueTwo[i]){
                    return false
                }
            }
           return true
        }
        return false
    }

    function compareStrings(a,b){
        if ( a === b ){
            return true
        }
        return false
    }

    function compareNumbers(a,b){
        if (a === b ){
            return true
        }
        return false
    }


    if (Array.isArray(a) && Array.isArray(b)){
        return 'compare array result: ' + compareArrays(a,b) 
    }

    if (typeof a === 'object' && typeof b === 'object') {
        return 'compare object result: ' + compareObjects(a,b)  
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return 'compare string result: ' + compareStrings(a,b)
    }

    if (typeof a === 'number' && typeof b === 'number'){
        return 'compare number result: ' + compareNumbers(a,b)
    }

    else {
        return 'cannot compare different types'
    }
}

// let a  = [1,2,3]
// let b = [1,2,3,4]

// let a = {
//     one: 'satu',
//     two: 'dua'
// }

// let b = {
//     one: 'satu',
//     two: 'three'
// }

// let a = 3
// let b = '4'
 
        
console.log(isEqual(a,b))
