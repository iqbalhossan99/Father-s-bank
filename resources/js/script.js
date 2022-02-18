// pass all input field value
function getInputValue(input) {
    const inputField = document.getElementById(input + "-input");
    const inputFieldValue = parseFloat(inputField.value);
    return inputFieldValue;
}

// get total amount id's to different place
function getTotalAmount(getTotal) {
    const getTotalAmountId = document.getElementById(getTotal + "-total");
    let getTotalAmountValue = parseFloat(getTotalAmountId.innerText);
    return getTotalAmountValue;

}

// pass all total amounts and showing the ui interface
function showTotalAmount(showTotal, amount) {
    const showTotalAmount = document.getElementById(showTotal + "-total");
    let showPreviousTotalAmount = parseFloat(showTotalAmount.innerText);
    showTotalAmount.innerText = amount;
    return showPreviousTotalAmount;

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
            const updateTotalExpenses = showTotalAmount("expenses", totalExpenses);
        } else {
            alert("Your income is lower than total expenses! You can't pass these amounts. Please enter the valid amount.");
        }

        return totalExpenses;

    } else if (isNaN(foodCost) || foodCost < 0 || isNaN(rentCost) || rentCost < 0 || isNaN(clotheCost) || clotheCost < 0) {
        alert("please put the positive amounts in expenses field!");

    }

}


// update total balance
function updateBalance() {

    const getTotalExpenses = getTotalAmount("expenses");
    const income = getInputValue("income");

    if (isNaN(income)) {
        alert("Please put the income amount!");
    } else if (income > getTotalExpenses) {
        const totalBalance = income - getTotalExpenses;
        const updateTotalBalance = showTotalAmount("balance", totalBalance);
        return totalBalance;
    }
}


// saving calculation
function savingUpdate() {
    const incomeAmounts = getInputValue('income');
    const savingInputValue = getInputValue("saving");
    if (savingInputValue > 0 && !isNaN(savingInputValue)) {
        const balanceTotal = getTotalAmount("balance");
        const savingAmount = (incomeAmounts * savingInputValue) / 100;
        if (balanceTotal > savingAmount) {
            const updateSavingAmount = showTotalAmount("saving", savingAmount);
        } else if (balanceTotal < savingAmount) {
            alert("Didn't find enough money")
        }


        return savingAmount;
    } else {
        alert("Please put a valid number for percentage");
    }
}

// remaining balance 
function remainingBalance() {
    const balanceTotal = getTotalAmount("balance");
    const SavingTotal = getTotalAmount("saving");
    if (SavingTotal < balanceTotal && SavingTotal > 0) {
        const remainingBalance = balanceTotal - SavingTotal;
        const updateRemainingBalance = showTotalAmount("remaining", remainingBalance);
    }
}

document.getElementById('calculate-btn').addEventListener('click', function () {

    // total cost amount
    const Expenses = updateTotalExpenses()

    // total balance 
    const balance = updateBalance();

})

// saving handle by clicking saving button
document.getElementById('saving-btn').addEventListener('click', function () {

    // saving
    const totalSavingAmount = savingUpdate();


    // remaining balance
    const totalRemainingAmount = remainingBalance()

})