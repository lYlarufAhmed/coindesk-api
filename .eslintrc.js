module.exports = {
    "root": true,
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    env: {
        node: true
    },
    "rules": {
        "no-console": "off",
        "import/prefer-default-export": "off",
        "@typescript-eslint/no-unused-vars": "warn"
    },
    "ignorePatterns": [
        "src/**/*.test.ts",
        "src/frontend/generated/*"
    ]
}