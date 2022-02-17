// get all input field value
function getInputValue(input) {
    const inputField = document.getElementById(input + "-input");
    const InputFieldValue = parseFloat(inputField.value);
    // clear input field
    inputField.value = '';

    return InputFieldValue;
}

// get all total amounts innerText
function getTotalAmount(total, amount) {
    const totalAmount = document.getElementById(total + "-total");
    let getPreviousTotal = parseFloat(totalAmount.innerText);
    totalAmount.innerText = amount;

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
// calculate between and expenses
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
    // getTotalAmount(balance);


})