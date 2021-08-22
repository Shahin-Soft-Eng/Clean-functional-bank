function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
}

// Update Total
function updateTotal(fieldId, amount){
    // const totalTag = document.getElementById(fieldId);
    // const previousTotalInText = totalTag.innerText;
    // const previousTotal = parseFloat(previousTotalInText);

    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
    return newTotal;
}

function updateBalance(amount, isAdding){
    // const balanceTag = document.getElementById('balance-total');
    // const balanceInText = balanceTag.innerText;
    // const previousBalance =parseFloat(balanceInText);

    // const diya jabe na....and ekoi second bracketer vitore same name hoy na
    // declare korar pore kono man set korte hole let diya korta hoy

    const previousBalance = getInnerTextValue('balance-total');

    let newBalance;

    if (isAdding==true) {
      newBalance = previousBalance + amount;
    } else {
        newBalance = previousBalance - amount;
    }

    
    balanceTag.innerText = newBalance;
}

document.getElementById('deposit-button').addEventListener('click', function(){
    const amount = getInputValue('deposit-input');
    if(amount > 0){
        updateTotal('deposit-total',amount);
    updateBalance(amount,true);
    }
  
});

// Handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){
    const amount = getInputValue('withdraw-input');
    if (amount > 0){
        updateTotal('withdraw-total',amount);
    updateBalance(amount,false)
    }
})