// code your solution here
function saturdayFun(action="roller-skate"){
     console.log(`This Saturday, I want to ${action}!`)
}
   

saturdayFun()

function mondayWork(activity){
    if(activity==undefined){
    console.log("This Monday, I will go to the office.")}
    else{
        console.log(`This Monday, I will ${activity}.`)
    }
}
mondayWork();

//let result = wrapAdjective("||")
//let emphatic = result("a dedicated programmer")
function wrapAdjective(initial, adj){
    if(initial=='*'){
        console.log(`You are *${adj}*!`)
    }
    if(initial=='||'){
        console.log(`You are ||${adj}||!`)
    }
}

wrapAdjective('||',"a dedicated programmer")

