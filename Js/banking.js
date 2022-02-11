
// handle deposit button event
document.getElementById('deposite-button').addEventListener('click', function()
{
    // get the amount deposited

  const depositInput = document.getElementById('deposit-input');
  const depositAmount = depositInput.value;
  console.log (depositAmount);

  const depositTotal = document.getElementById('deposite-total');
  depositTotal.innerText = depositAmount;

//   clear the deposite input field
depositInput.value = '';

})