class CreateCounter{
    count = 0;


    increment(){
        this.count +=1
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