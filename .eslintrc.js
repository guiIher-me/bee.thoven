module.exports = {
    env: {
        commonjs: true,
        es2020: true,
        node: true,
    },
    extends: [
        'airbnb-base',
    ],
    parserOptions: {
        ecmaVersion: 11,
    },
    rules: {
        'no-console': 'off',
        'linebreak-style': 0,
        'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
        'nonblock-statement-body-position': ['error', 'below'],
        curly: ['error', 'multi'],
        indent: ['error', 4],
        semi: ['error', 'never'],
    },
}
