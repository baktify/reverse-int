module.exports = function reverse(number) {
    let isNegative = number < 0;

    let result = String(number);

    result = [...result];

    if (isNegative) result.splice(0, 1);

    result = result.reverse().join("");

    return Number(result);
};
