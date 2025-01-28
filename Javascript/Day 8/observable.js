const obj = {
    array : [],
    state : "",
    subscribe(func){
        this.array.push(func);
    },
    unsubscribe(func){
        var index = this.array.indexOf(func);
        this.array.splice(index,1);
    },
    notify(){
        this.array.forEach(arr=>arr(this.state));
    },
    setState(newState){
        this.state = newState;
        this.notify();
    }
}
function func1(state){
    console.log("This is func1. New state is",state);
}
function func2(state){
    console.log("This is func2. New state is",state);
}
obj.subscribe(func1);
obj.subscribe(func2);
obj.setState("State1");
obj.unsubscribe(func1);
console.log("func1 is unsubscribed");
obj.setState("State2");