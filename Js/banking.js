
// handle deposit button event
document.getElementById('deposite-button').addEventListener('click', function()
{
    // get the amount deposited

  const depositInput = document.getElementById('deposit-input');

  const newdepositAmountText = depositInput.value;
  const newdepositAmount = parseFloat(newdepositAmountText)

/* update deposite total */

  const depositTotal = document.getElementById('deposit-total');
  const previousDepositText = depositTotal.innerText;
  const previousDepositAmount = parseFloat(previousDepositText);
 

  const newDepositTotal = previousDepositAmount + newdepositAmount ;

   depositTotal.innerText =   newDepositTotal;

// update account balance


const balanceTotal = document.getElementById('balance-total');

const balanceTotalText = balanceTotal.innerText;

const previousBalanceTotal= parseFloat(balanceTotalText);


const newBalanceTotal = previousBalanceTotal + newDepositTotal ;

balanceTotal.innerText =   newBalanceTotal;


//   clear the deposite input field
depositInput.value = '';

})