function romanToInt(romanNumber) {
    const symbolValue = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let index = 0;
    let finalResult = 0;
    while (index < romanNumber.length) {
        if (index === romanNumber.length - 1) {
            finalResult += symbolValue[romanNumber[index]];
        } else if (symbolValue[romanNumber[index]] >= symbolValue[romanNumber[index + 1]]) {
            finalResult += symbolValue[romanNumber[index]];
        } else {
            finalResult -= symbolValue[romanNumber[index]];
        }
        index++;
    }

    return finalResult;
}
