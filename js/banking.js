
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear input field
    inputField.value = '';
    return amountValue;

}


function updateTotalField(totalFieldId, amount) {
    debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previosTotal = parseFloat(totalText);

    totalElement.innerText = previosTotal + amount;
}



//Deposit Function
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');

    //get and update deposit total
    /* const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previosTotalDeposit = parseFloat(depositTotalText);

    depositTotal.innerText = previosTotalDeposit + depositAmount; */

    updateTotalField('deposit-total', depositAmount);

    //update deposit balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount;


})

//handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    /* 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText); 
    */

    const withdrawAmount = getInputValue('withdraw-input');
    //get and update withdraw total 
    /* const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalText); 
    
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    
    */

    updateTotalField('withdraw-total', withdrawAmount);



    //update withdraw balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;



})