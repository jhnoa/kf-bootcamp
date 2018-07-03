class createCallLog{
    constructor(){
        this.calls = []
    }

    add (type, num){
        this.calls.push({
            type,num
        })
    }

    getLogs(){
        console.log(this.calls)
    }
}


let callOne = new createCallLog;
callOne.add('incoming', 0821);
callOne.add('outgoing', 0811);
callOne.add('missed', 0831);
callOne.getLogs()