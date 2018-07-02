/* 
1) length must be > 6
2) must have uppercase & lowercase
*/ 

function checkPassword(input){

    function hasLowerCase(input) {
        return (/[a-z]/.test(input));
    }

    function hasUpperCase(input){
        return (/[A-Z]/.test(input))
    }

    if (input.length < 6){
         return  false;
    }
    else {
        if (hasLowerCase(input) === false && hasUpperCase(input) === false) {
             return false
        }
    }

    return true
}

let input = 'passWord'
console.log(checkPassword(input))