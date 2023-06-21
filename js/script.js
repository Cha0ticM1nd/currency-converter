{
    const calculateResult = (amount, currency) => {
        const rateUSD = 4.1612;
        const rateGBP = 5.2452;
        const rateEUR = 4.5885;
        const rateCHF = 4.6652;

        switch (currency) {
            case "USD":
                return amount / rateUSD;

            case "GBP":
                return amount / rateGBP;

            case "EUR":
                return amount / rateEUR;

            case "CHF":
                return amount / rateCHF;
        }
    };
    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}

