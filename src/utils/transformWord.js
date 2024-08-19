// {
//   1: "capitalized case",
//   2: "lower case",
//   3: "upper case"
// }

const transformWord = (word = '', method = 1) => {
    if (typeof word !== 'string' || word === '') return;

    let result;

    word = word.split(" ");

    if (method === 1) {
        result = word.map(words => words.charAt(0).toUpperCase() + words.slice(1).toLowerCase())
    }

    if (method === 2) {
        result = word.map(words => words.toLowerCase());
    }

    if (method === 3) {
        result = word.map(words => words.toUpperCase());
    }

    return result.join(" ");
};

export { transformWord }