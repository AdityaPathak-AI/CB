function addUp(){
    const args = Array.from(arguments);
    this.x = args.reduce((perv, curr)=>perv + curr,0);
    console.log("this.x=",this.x);
}
function driverFunc(){
    const obj = {
        inps : [1,2,3,4,5,6]
    }
    addUp.apply(obj,obj.inps);
}
driverFunc();