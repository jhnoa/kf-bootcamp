class createCounter{
    constructor(){
        this.count = 0
    }

    increment(){
        this.count +=1
    }

    decrement(){
        this.count -= 1
    }
}

let count = new createCounter();
count.increment()
count.decrement()
console.log(count)