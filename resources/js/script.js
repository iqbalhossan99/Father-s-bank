// pass all input field value
function getInputValue(input) {
    const inputField = document.getElementById(input + "-input");
    const inputFieldValue = parseFloat(inputField.value);
    return inputFieldValue;
}

// pass all total amounts and showing the ui interface
function getTotalAmount(total, amount) {
    const totalAmount = document.getElementById(total + "-total");
    let getPreviousTotal = parseFloat(totalAmount.innerText);
    totalAmount.innerText = amount;
    return getPreviousTotal;

}

// update total expenses
function updateTotalExpenses() {
    const incomeAmount = getInputValue("income");
    const foodCost = getInputValue("food");
    const rentCost = getInputValue("rent");
    const clotheCost = getInputValue("clothe");
    if (foodCost >= 0 && rentCost >= 0 && clotheCost >= 0 && incomeAmount >= 0) {

        const totalExpenses = foodCost + rentCost + clotheCost;

        if (incomeAmount > totalExpenses) {
            const updateTotalExpenses = getTotalAmount("expenses", totalExpenses);
        } else {
            alert("Your income is lower than total expenses! You can't pass these amounts. Please enter the valid amount.");
        }

        return totalExpenses;

    } else if (isNaN(foodCost) || foodCost < 0 || isNaN(rentCost) || rentCost < 0 || isNaN(clotheCost) || clotheCost < 0) {
        alert("please enter the positive amounts!");

    }

}

// update total balance
function updateBalance() {

    const getTotalExpenses = document.getElementById("expenses-total");
    const totalExpensesAmount = parseFloat(getTotalExpenses.innerText);
    const income = getInputValue("income");
    if (isNaN(income)) {
        alert("Please put the income amount!");
    } else if (income > totalExpensesAmount) {
        const totalBalance = income - totalExpensesAmount;
        const updateTotalBalance = getTotalAmount("balance", totalBalance);
        return totalBalance;
    }
}


// saving calculation
function savingUpdate() {
    const incomeForSaving = getInputValue('income');
    const savingValue = getInputValue("saving");
    const savingUpdate = (incomeForSaving * savingValue) / 100;

    const balanceForSaving = document.getElementById("balance-total");
    const parseBalanceForSaving = parseFloat(balanceForSaving.innerText);

    if (parseBalanceForSaving > savingUpdate) {
        const updateSavingNewAmounts = getTotalAmount("saving", savingUpdate);
    } else if (parseBalanceForSaving < savingUpdate) {
        alert("Didn't find enough money")
    }
    return savingUpdate;
}

// remaining balance 
function remainingBalance() {
    const balance = document.getElementById("balance-total");
    const parsesBalance = parseFloat(balance.innerText);
    const getSavingTotal = document.getElementById("saving-total");
    const parsesSavingTotal = parseFloat(getSavingTotal.innerText);
    if (parsesBalance > parsesSavingTotal && parsesSavingTotal > 0) {
        const remainingBalance = parsesBalance - parsesSavingTotal;
        const updateRemainingBalance = getTotalAmount("remaining", remainingBalance);
    }

}

document.getElementById('calculate-btn').addEventListener('click', function () {


    // total cost in a month
    updateTotalExpenses()

    // balance 
    const balance = updateBalance();

})

// saving handle by clicking saving button
document.getElementById('saving-btn').addEventListener('click', function () {

    // saving
    const newSavingAmount = savingUpdate();


    // remaining balance
    remainingBalance()

})