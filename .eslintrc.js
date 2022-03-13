
module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/strongly-recommended',
        'eslint:recommended'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-html2canvas':'off',
        'no-BMAP_STATUS_SUCCESS':'off',
        //不适用分号;
        'semi': [
            2,
            'never'
        ],
        //缩进为4个空格
        // 'indent': [
        //     'error',
        //     4
        // ],
        // js 的引号必须是单引号
        'quotes': [
            2,
            'single'
        ],
        // 括号与函数名加空格
        'space-before-function-paren': [
            'error', 'always'
        ],
        // 对象最后一个key不允许带 ‘,’
        'comma-dangle': [2, 'never'], 
        // 逗号前后的空格
        'comma-spacing': [ 
            2, {
                'before': false,
                'after': true
        }],
        //对象字面量中冒号的前后空格
        "key-spacing": [
            2, { 
                "beforeColon": false, 
                "afterColon": true 
        }],
        "vue/require-default-prop": 0,
        "vue/require-default-prop": 0,
        "vue/require-prop-types": 0,
        "vue/attribute-hyphenation": 0,
        "vue/html-self-closing": 0,
        "vue/component-name-in-template-casing": 0,
        "vue/html-closing-bracket-spacing": 0,
        "vue/singleline-html-element-content-newline": 0,
        "vue/no-unused-components": 0,
        "vue/multiline-html-element-content-newline": 0,
        "vue/no-use-v-if-with-v-for": 0,
        "vue/html-closing-bracket-newline": 0,
        "vue/no-parsing-error": 0,
        "vue/require-prop-types": 0,
        "vue/no-side-effects-in-computed-properties": 0,
        //关闭空格和tabs混淆
        "no-mixed-spaces-and-tabs": ["error", "smart-tabs"]
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
