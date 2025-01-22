
function validateCreditCardNumber(cardNumber) {
    let sum = 0;
    let shouldDouble = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber.charAt(i));
        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
        shouldDouble = !shouldDouble;
    }
    return sum % 10 === 0;
}

function getCardIssuer(cardNumber) {
    const issuers = {
        'Visa': /^4[0-9]{12}(?:[0-9]{3})?$/,
        'MasterCard': /^5[1-5][0-9]{14}$/,
        'American Express': /^3[47][0-9]{13}$/,
        'Discover': /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        'Diners Club': /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/, 
        'JCB': /^(?:2131|1800|35\d{3})\d{11}$/, 
        'Hipercard': /^(606282\d{10}(\d{3})?)|(3841\d{15})$/, 
        'Aura': /^50[0-9]{14,17}$/, 
    };

    for (let issuer in issuers) {
        if (issuers[issuer].test(cardNumber)) {
            return issuer;
        }
    }
    return 'Unknown';
}

const cardNumber = '4111111111111111'; 
if (validateCreditCardNumber(cardNumber)) {
    console.log('Valid card number');
    console.log('Card issuer:', getCardIssuer(cardNumber));
} else {
    console.log('Invalid card number');
}