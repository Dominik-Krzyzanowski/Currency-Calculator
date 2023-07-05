console.log("Hi! Welcome in my currency converter. I hope it will be useful 😃");

let formElement = document.querySelector(".js-form");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amountElement = document.querySelector(".js-amountPLN");
    let currencySelectionElement = document.querySelector(".js-currencySelection");
    let resultElement = document.querySelector(".js-result");

    let CHF = 4.74;
    let EUR = 4.69;
    let GBP = 5.35;
    let USD = 4.71;

    let amount = +amountElement.value;
    let currency = currencySelectionElement.value;

    let result;

    switch (currency) {
        case "CHF":
            result = amount / CHF;
            break;
        case "EUR":
            result = amount / EUR;
            break;
        case "GBP":
            result = amount / GBP;
            break;
        case "USD":
            result = amount / USD;
            break;
    }
    resultElement.value = `${result.toFixed(2)} ${currency}`;
});