function kilometerToMeter(kilometerValue){
    //checking if negative input is given
    if(kilometerValue < 0){
        return "Invalid input!!! Try again."
    }
    
    // if all conditions are okay then proceeding
    else{
        var meterValue = kilometerValue * 1000;
        return meterValue;
    }
}



function budgetCalculator(clock,phone,laptop){
    //checking if valid input is given
    if(clock < 0 || phone < 0 || laptop < 0){
        return "Invalid input!!! Try again."
    }

    // if all conditions are okay then proceeding
    else{
        //clock price = 50 taka/piece , phone budget = 100 taka/piece , laptop budget = 500 taka/piece
        var clockBudget = clock * 50;
        var phoneBudget = phone * 100;
        var laptopBudget = laptop * 500;
        var totalBudget = clockBudget + phoneBudget + laptopBudget;

        return totalBudget;
    }
}



function hotelCost(days){
    //checking if valid input is given
    if(days < 0){
        return "Invalid input!!! Try again."
    }

    // if all conditions are okay then proceeding
    else{
        //initial Cost is 0
        var totalCost = 0;

        // day 1-10 : 100 taka/night , day 11-20 : 80 taka/night , days > 20 : 50 taka/night
        if(days <= 10){
            totalCost = days * 100;
        }
        else if(days <= 20){
            var firstCost = 10 * 100;
            var remainingDays = days - 10;
            var secondCost = remainingDays * 80;
            totalCost = firstCost + secondCost;
        }
        else{
            var firstCost = 10 * 100;
            var secondCost = 10 * 80;
            var remainingDays = days - 20;
            var thirdCost = remainingDays * 50;
            totalCost = firstCost + secondCost + thirdCost;
        }
        
        //returing the total hotel cost
        return totalCost;
    }
}



function megaFriend(names){
    //helping function to check if all the array elements are string
    function check(x){
      return x.every(i => (typeof i === "string"));
    }

    //checking if array has no element OR all elements of the array is not string
    if( names.length == 0 || check(names) == false ){
        return "Invalid input!!! Try again."
    }

    // if all conditions are okay then proceeding
    else{
        //i for iteration , biggestName for storing the biggest name , referIndex for finding biggest name index
        var i, biggestName;
        //setting an initial value
        biggestName = names[0];

        //now searching with for loop
        for(i = 1; i< names.length; i++){
            if(names[i].length > biggestName.length){
                biggestName = names[i];
            }
        }

        return biggestName;
    }
}



//checking the results to see if all the functions are working fine
//for problem 1
var result1 = kilometerToMeter(6.5);
console.log(result1);

//for problem 2
var result2 = budgetCalculator(5,7,4);
console.log(result2);

//for problem 3
var result3 = hotelCost(34);
console.log(result3);

//for problem 4
var names = ["Monir","Shojib","Islam"];
var result4 = megaFriend(names);
console.log(result4);