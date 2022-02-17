// get all input field value
function getInputValue(input) {
    const inputField = document.getElementById(input + "-input");
    const inputFieldValue = parseFloat(inputField.value);
    // clear input field
    // inputField.value = '';

    return inputFieldValue;
}

// get all total amounts innerText
function getTotalAmount(total, amount) {
    const totalAmount = document.getElementById(total + "-total");
    let getPreviousTotal = parseFloat(totalAmount.innerText);
    totalAmount.innerText = amount;
    return getPreviousTotal;

}

// update total expenses
function updateTotalExpenses(food, rent, clothe) {
    const totalExpenses = food + rent + clothe;
    return totalExpenses;
}

// update total balance
function updateBalance(income, totalCost) {
    const totalBalance = income - totalCost;
    return totalBalance;

}


// saving calculation
function savingUpdate(income, saving) {
    const savingUpdate = (income * saving) / 100;
    // console.log(savingUpdate);
    return savingUpdate;
}

// remaining balance 
function remainingBalance() {

}
document.getElementById('calculate-btn').addEventListener('click', function () {

    // put all input id's
    const income = getInputValue("income");
    const food = getInputValue("food");
    const rent = getInputValue("rent");
    const clothe = getInputValue("clothe");

    // total cost in a month
    const totalCost = updateTotalExpenses(food, rent, clothe);
    const updateNewExpenses = getTotalAmount("expenses", totalCost);

    // balance 
    const balance = updateBalance(income, totalCost);
    const updateNewBalance = getTotalAmount("balance", balance);

})

// saving handle by clicking saving button
document.getElementById('saving-btn').addEventListener('click', function () {

    const incomeForSaving = getInputValue('income');
    const savingValue = getInputValue("saving");
    const newSavingAmount = savingUpdate(incomeForSaving, savingValue);
    const updateSavingAmount = getTotalAmount('saving', newSavingAmount)


    // remaining balance
    // const remainingBalance = updateBalance() - savingUpdate();
    // console.log(remainingBalance);

    const getCurrentTotalBalance = document.getElementById('balance-total').innerText;
    const convertedTotalBalance = parseFloat(getCurrentTotalBalance);
    console.log(convertedTotalBalance)
    const getCurrentTotalBalanceSaving = document.getElementById('saving-total').innerText;
    const convertedTotalBalanceSaving = parseFloat(getCurrentTotalBalanceSaving);
    console.log(convertedTotalBalanceSaving)

    const RemainingAmount = convertedTotalBalance - convertedTotalBalanceSaving;

    console.log(RemainingAmount);
    const updateSavingAmounts = getTotalAmount('remaining', RemainingAmount)

    // const getCurrentTotalBalance = getTotalAmount('balance');
    // console.log(getCurrentTotalBalance)
    // const getCurrentTotalBalanceSaving = getTotalAmount('saving');
    // console.log(getCurrentTotalBalanceSaving)


    // const remainingTotal = getCurrentTotalBalance - getCurrentTotalBalanceSaving;
    // console.log(remainingTotal);

})