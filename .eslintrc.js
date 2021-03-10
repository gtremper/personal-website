module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
   ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect' // Tells eslint-plugin-react to automatically detect the version of React to use
    }
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off"
  }
};
