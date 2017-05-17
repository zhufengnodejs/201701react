let sum = (a,b)=>a+b;
/**
 1.不改变传入的参数
 2.相同的输入一定会产生相同的输出
 **/
/*
let account = {balance:0};
let withdraw = (account,amount)=>{
    account.balance -= amount;
    return account;
}
*/

function random(num){
    return Math.random()+1;
}
console.log(random(2));
console.log(random(2));