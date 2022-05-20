module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2015,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        jest: true,
        browser: true,
        commonjs: true,
        amd: true,
        es6: true,
        node: true,
    },
    plugins: ['react', 'prettier'],
    extends: ['eslint:recommended', 'prettier', 'plugin:react/recommended', 'plugin:prettier/recommended'],
    rules: {
        'no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: false,
            },
        ],
        'prettier/prettier': [
            'error',
            {
                usePrettierrc: false,
            },
        ],
    },
}