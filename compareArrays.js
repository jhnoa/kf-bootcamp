
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

    let a = [1,2,3,4]
    let b = [1,2,3,4]

    console.log(compareArrays(a,b))