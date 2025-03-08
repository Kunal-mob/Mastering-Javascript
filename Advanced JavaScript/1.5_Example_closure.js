function bankAccount() {
  let Balance = 1000;

  return {
    deposit: (amount) => {
      console.log("Previous Balance" + Balance);
      Balance += amount;
      console.log("Current Balance" + Balance);
    },
    withdraw: (amount) => {
      if (amount <= Balance) {
        console.log("Previous Balance" + Balance);

        Balance -= amount;
        console.log("Current Balance" + Balance);
      } else {
        console.log("Insufficient Balance!!!");
      }
    },
  };
}

let myAccount = bankAccount()
myAccount.withdraw(500)
myAccount.deposit(100500)
