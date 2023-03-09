// Documentation for this file: https://prettier.io/en/configuration.html
module.exports = {
    tabWidth: 4,
    // We use a larger print width because Prettier's word-wrapping seems to be tuned
    // for plain JavaScript without type annotations
    printWidth: 120,

    // Use .gitattributes to manage newlines
    endOfLine: "auto",

    // Use single quotes instead of double quotes
    singleQuote: false,

    // For ES5, trailing commas cannot be used in function parameters; it is counterintuitive
    // to use them for arrays only
    trailingComma: "none",

    plugins: [
        "./common/autoinstallers/rush-prettier/node_modules/prettier-plugin-packagejson",
        "./common/autoinstallers/rush-prettier/node_modules/prettier-plugin-properties"
    ]
};
