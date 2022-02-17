function getInputValue(input) {
    const inputField = document.getElementById(input + "-input");
    const getInputFieldValue = inputField.value;
    const getIntInputValue = parseFloat(getInputFieldValue);
    inputField.value = '';

    return getIntInputValue
}

// calculate between and expenses
document.getElementById('calculate-btn').addEventListener('click', function () {
    const food = getInputValue("food");
    const rent = getInputValue("rent");
    const clothe = getInputValue("clothe");

    // total cost in a month
    const totalExpenses = food + rent + clothe;
    // console.log(totalCost);

    const income = getInputValue("income");

    const balance = income - totalExpenses;

    console.log(balance);


})