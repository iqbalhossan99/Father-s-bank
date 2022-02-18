// get all input field value
function getInputValue(input) {
    const inputField = document.getElementById(input + "-input");
    const inputFieldValue = parseFloat(inputField.value);
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
function updateTotalExpenses(food, rent, clothe, income) {

    if (food >= 0 && rent >= 0 && clothe >= 0 && income >= 0) {
        const totalExpenses = food + rent + clothe;
        if (income > totalExpenses) {
            const updateNewExpenses = getTotalAmount("expenses", totalExpenses);
        } else {
            alert("your income is lower than to totalExpenses!. Enter the valid amount.");
        }
        return totalExpenses;
    } else if (isNaN(food) || food < 0 || isNaN(rent) || rent < 0 || isNaN(clothe) || clothe < 0) {
        alert("please enter the positive amounts!");

    }

}

// update total balance
function updateBalance(income, totalCost) {
    if (isNaN(income)) {
        alert("Please put the income amount!");
    } else if (income > totalCost) {
        const totalBalance = income - totalCost;
        const updateNewBalance = getTotalAmount("balance", totalBalance);
        return totalBalance;
    }
}


// saving calculation
function savingUpdate(income, saving) {
    const savingUpdate = (income * saving) / 100;

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
    const totalCost = updateTotalExpenses(food, rent, clothe, income);
    // const updateNewExpenses = getTotalAmount("expenses", totalCost);

    // balance 
    const balance = updateBalance(income, totalCost);
    // const updateNewBalance = getTotalAmount("balance", balance);

})

// saving handle by clicking saving button
document.getElementById('saving-btn').addEventListener('click', function () {

    const incomeForSaving = getInputValue('income');
    const savingValue = getInputValue("saving");

    const newSavingAmount = savingUpdate(incomeForSaving, savingValue);
    const updateNewSaving = getTotalAmount("saving", newSavingAmount);




})