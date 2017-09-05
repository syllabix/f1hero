module.exports = {
    "extends": "eslint:recommended",
    "parserOptions": {
      "ecmaVersion": 6,
      "ecmaFeatures": {
        "jsx": true
      },
      "sourceType": "module"
    },
    "env": {
      "browser": true,
      "node": true
    },
    "plugins": [
      "react",
      "promise"
    ],
    "rules": {
      "no-console": 0,
      "new-cap": 0,
      "strict": 0,
      "no-underscore-dangle": 0,
      "no-use-before-define": 0,
      "eol-last": 0,
      "quotes": [2, "single"],
      "jsx-quotes": [1, "prefer-double"],
      "react/jsx-no-undef": 1,
      "react/jsx-uses-react": 1,
      "react/jsx-uses-vars": 1
    },
    "extends": [
      "plugin:promise/recommended"
    ]
  }