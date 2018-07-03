class createCounter{
    constructor(){
        this.count = 0
    }

    increment(){
        count +=1
    }

    decrement(){
        this.count -= 1
    }

    showCount(){
        console.log(this.count)
    }
}

let count = new createCounter();
count.increment()
count.decrement()
count.increment()
count.increment()
count.showCount()



 