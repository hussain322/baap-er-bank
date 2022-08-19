document.getElementById('diposit-btn').addEventListener('click', function(){
    const dipositField = document.getElementById('diposit-field');
    const newDipositAmountString = dipositField.value;
    const newDipositAmount = parseFloat(newDipositAmountString);

     // clear the diposit field
     dipositField.value = '';

    if(isNaN(newDipositAmount)){
        alert('Please provide a valid number');
        return;
    }
    
    const dipositTotalElement = document.getElementById('diposit-total');
    const previousDipositTotalString = dipositTotalElement.innerText;
    const previousDipositTotal = parseFloat(previousDipositTotalString);

    const currentDipositTotal = previousDipositTotal + newDipositAmount;
    dipositTotalElement.innerText = currentDipositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const  currentBalanceTotal = previousBalanceTotal + newDipositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
})