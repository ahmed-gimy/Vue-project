export default {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "vue/multi-word-component-names": "off",
        // 'vue/max-attributes-per-line': [
        //     'error',
        //     {
        //         singleline: 2, // Allows up to 3 attributes on a single line
        //         multiline: {
        //             max: 1, // Only allows 1 attribute per line on multi-line elements
        //             allowFirstLine: true,
        //         },
        //     },
        // ],
    }
}
