document.addEventListener('DOMContentLoaded', function() {
    const billInput = document.getElementById('bill');
    const tipInput = document.getElementById('tip');
    const calculateBtn = document.getElementById('calculate-btn');
    const tipAmountSpan = document.getElementById('tip-amount');
    const totalAmountSpan = document.getElementById('total-amount');

    const clearBtn = document.getElementById('clear-btn');

    calculateBtn.addEventListener('click', function() {
        const bill = parseFloat(billInput.value);
        const tipPercentage = parseFloat(tipInput.value);

        if (isNaN(bill) || isNaN(tipPercentage) || bill <= 0 || tipPercentage < 0) {
            alert('Por favor, insira valores numéricos válidos e positivos.');
            return;
        }

        const tipAmount = bill * (tipPercentage / 100);
        const totalAmount = bill + tipAmount;

        tipAmountSpan.textContent = `R$ ${tipAmount.toFixed(2)}`;
        totalAmountSpan.textContent = `R$ ${totalAmount.toFixed(2)}`;
    });

    clearBtn.addEventListener('click', function() {
        billInput.value = '';
        tipInput.value = '';
        tipAmountSpan.textContent = 'R$ 0.00';
        totalAmountSpan.textContent = 'R$ 0.00';
    });
});