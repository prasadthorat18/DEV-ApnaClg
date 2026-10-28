let max= Number(prompt("enter a MAX number from 0 to max you'll guess"));
console.log("your max number is:",max);

let random= Math.floor(Math.random()*max)+1;

let guess = prompt("Enter your Guess Number");

while(true){
    if(guess=="quit"){
        console.log("you are done bruhhh.");
        break;
    }
    if(guess==random){
        console.log("Bang..! you nailed it man. random number was",random);
        break;       
    }
    else {
        if(guess>random){
            guess=prompt(`HINT : CLOSE, try to enter smaller no. than ${guess}`);
        }
        else if(guess<random){
            guess=prompt(`HINT : CLOSE, try to enter larger no. than ${guess}`);
        }
        console.log("wrong.. please try again");

    }
}