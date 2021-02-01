
var availableBallance = 35000; 
let deposit = parseInt(prompt("Enter amount of money to deposit on your ballance:"));

function makeDesposit(deposit,availableBallance){
    let result = availableBallance + deposit ;
    console.log(`Your new ballance is ${result}`);
}

let withdrawal = parseInt(prompt("Enter amount of money to withdrawal:"));

function makeWithdrawal(withdrawal,availableBallance){
    let newAmmount = availableBallance - withdrawal;
    console.log(`Your new ballance is ${newAmmount}`);
}

function getTheBalance(availableBallance){
    console.log(`Your ballance is ${availableBallance}`);
}

let userExit = prompt("Enter exit to stop");

function exit(userExit){
    if(userExit == 'exit'){
        console.log(`Thankyou for using the ATM`)
    }else{
        console.log(`Wrong input`)
    }
}


makeDesposit(deposit,availableBallance);
makeWithdrawal(withdrawal,availableBallance);
getTheBalance(availableBallance);
exit(userExit);


//-------ANOTHER SOLUTION-----------

// let balance = 5000;
// s = new Scanner(System.in);
//         while(true)
//         {
//             System.out.println("Automated Teller Machine");
//             System.out.println("Choose 1 for Withdraw");
//             System.out.println("Choose 2 for Deposit");
//             System.out.println("Choose 3 for Check Balance");
//             System.out.println("Choose 4 for EXIT");
//             System.out.print("Choose the operation you want to perform:");
//             let n = s.nextInt();
//             switch(n)
//             {
//                 case 1:
//                 System.out.print("Enter money to be withdrawn:");
//                 withdraw = s.nextInt();
//                 if(balance >= withdraw)
//                 {
//                     balance = balance - withdraw;
//                     System.out.println("Please collect your money");
//                 }
//                 else
//                 {
//                     System.out.println("Insufficient Balance");
//                 }
//                 System.out.println("");
//                 break;
 
//                 case 2:
//                 System.out.print("Enter money to be deposited:");
//                 deposit = s.nextInt();
//                 balance = balance + deposit;
//                 System.out.println("Your Money has been successfully deposited");
//                 System.out.println("");
//                 break;
 
//                 case 3:
//                 System.out.println("Balance : "+balance);
//                 System.out.println("");
//                 break;
 
//                 case 4:
//                 System.exit(0);
//             }
//         }