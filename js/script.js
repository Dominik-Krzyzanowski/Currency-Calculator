{
    const welcome = () => {
        console.log("Hi! Welcome in my currency converter. I hope it will be useful 😃");
    }
    welcome();

    const calculateResult = (amount, currency) => {
        const CHF = 4.74;
        const EUR = 4.69;
        const GBP = 5.35;
        const USD = 4.71;

        switch (currency) {
            case "CHF":
                return amount / CHF;

            case "EUR":
                return amount / EUR;

            case "GBP":
                return amount / GBP;

            case "USD":
                return amount / USD;
        }
    };

    const updateResultsText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.value = `${result.toFixed(2)} ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amountPLN");
        const currencySelectionElement = document.querySelector(".js-currencySelection");
        const amount = +amountElement.value
        const currency = currencySelectionElement.value

        const result = calculateResult(amount, currency);

        updateResultsText(amount, result, currency);
    }

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}