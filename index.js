// code your solution here
function saturdayFun(action="roller-skate"){
     return(`This Saturday, I want to ${action}!`)
}
   

saturdayFun()

const mondayWork = function (activity="go to the office"){
   if(activity===undefined){
        return(`This Monday, I will ${activity}.`)}
    else{
     return(`This Monday, I will ${activity}.`)
    }
}

mondayWork('work from home');


function wrapAdjective(visual="*"){
    return function (string="special"){
        return `You are ${visual}${string}${visual}!`
    }
}
