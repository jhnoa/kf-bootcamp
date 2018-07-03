/*
1) get = name of property // string // return it
2) set = take key and value // string & mixed // store the value in the database 
3) foreach = loop through the database 
*/

class DataStore {
    constructor() {
      this.data = []
    }
    
    get(prop){
        let result = []
        for (var i=0; i < this.data.length; i++){
            result.push(this.data[i][prop])
        }
        console.log(result)
    }

    set(key,value){
        this.data.push({
            key,
            value
        })
    }

    forEach(){
        this.data.forEach(function(el){
            console.log(el)
        })
    }
  }
  
  let data = new DataStore()
  data.set('abc',123)
  data.set('bcd', 334)
  data.get('value')
  data.forEach() 