
      function bank(){let balance = 10000;
      alert("Welcome to Nafkem Bank ATM-Pull");
      let choice;
      do {
        choice = parseInt(prompt(`Enter your choice: Options: 
                1. Insert Card 
                2. Exit`));
        if (choice === 1) {
          let pinAttempts = 3;
          let loginSuccess = false;
          while (pinAttempts > 0 && !loginSuccess) {
            const pin = prompt("Enter your 4-digit PIN:");
            if (pin === "1234") {
              loginSuccess = true;
              alert("PIN accepted");
            } else {
              pinAttempts--;
              if (pinAttempts > 0) {
                alert(`Invalid PIN. ${pinAttempts} attempts remaining.`);
              } else {
                alert("Too many unsuccessful attempts. Exiting.");
              }
            }
          }
          while (loginSuccess) {
                 choice = parseInt(prompt(`Enter your choice:
                 1. Withdraw Funds 
                 2. Transfer Funds 
                 3. Check Account Balance 
                 4. Deposit Funds 
                 5. Exit`));
            switch (choice) {
              case 1:
                const withdrawAmount = parseFloat(
                  prompt("Enter the amount to withdraw: ")
                );
                if (balance >= withdrawAmount) {
                  balance -= withdrawAmount;
                  alert(
                    `Withdrew $${withdrawAmount}. Current balance: $${balance}`
                  );
                } else {
                  alert("Insufficient funds!");
                }
                break;
              case 2:
                const transferAmount = parseFloat(
                  prompt("Enter the amount you want to transfer")
                );
                const accountNumber = parseInt(
                  prompt("Enter the recipient's account number")
                );
                alert(
                  `Transfer $${transferAmount} to account ${accountNumber}`
                );
                if (balance >= transferAmount) {
                  balance -= transferAmount;
                  alert(`Transfer successful. Current balance: $${balance}`);
                } else {
                  alert("Insufficient funds!");
                }
                break;
              case 3:
                alert(`Your balance is $${balance}.`);
                break;
              case 4:
                const depositAmount = parseFloat(
                  prompt("Enter the amount you wish to deposit: ")
                );
                balance += depositAmount;
                alert(
                  `Deposit of $${depositAmount} successful. Current balance: $${balance}`
                );
                break;
                case 5:
                alert("Thank you for banking with us.Please take your card");
                window.location.href = "task.html"
                break;
              default:
                alert("Invalid choice");
                break;
            }
          }
        }
      } while (choice !== 2);
    }