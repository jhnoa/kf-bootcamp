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
        return 'Password needs to be at least 6 characters.'
    }
    else {
        if (hasLowerCase(input) === false || hasUpperCase(input) === false) {
        return 'Password needs to have both lowercase and uppercase.'
        }
    }

   return 'Password approved.'
}

let input = 'tes'
console.log(checkPassword(input))