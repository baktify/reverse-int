module.exports = function reverse(number) {
    let result = `${number}`;

    result = result.split("").reverse().join("");

    return result / 1;
};
