{
  "editor.quickSuggestions": {
    //开启自动显示建议
    "other": true,
    "comments": true,
    "strings": true
  },
  // vscode默认启用了根据文件类型自动设置tabsize的选项
  "editor.detectIndentation": false,
  // 重新设定tabsize
  "editor.tabSize": 2,
  // 每次保存的时候自动格式化 
  "editor.formatOnSave": true,
  // 每次保存的时候将代码按eslint格式进行修复
  "eslint.autoFixOnSave": true,
  // 添加 vue 支持
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  // 让prettier使用eslint的代码格式进行校验 
  "prettier.eslintIntegration": true,
  // 去掉代码结尾的分号 
  "prettier.semi": false,
  // 使用单引号替代双引号 
  "prettier.singleQuote": true,
  // 让函数(名)和后面的括号之间加个空格
  // "javascript.format.insertSpaceBeforeFunctionParenthesis": false,
  // html格式化，这个按用户自身习惯选择 
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  // 让vue中的js按编辑器自带的ts格式进行格式化 
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "vetur.format.defaultFormatterOptions": {
    "js-beautify-html": {
      "wrap_attributes": "force-aligned"
      // vue组件中html代码格式化样式
    }
  },
  "search.exclude": {
    "**/node_modules": true,
    "**/bower_components": true,
    "**/dist": true
  },
  "emmet.syntaxProfiles": {
    "javascript": "jsx",
    "vue": "html",
    "vue-html": "html"
  },
  // 设置字体
  "editor.fontFamily": "'Droid Sans Mono', 'Courier New', monospace, 'Droid Sans Fallback'",
  // vscode 程序title位置显示内容，这里设置了显示路径
  "window.title": "${dirty}${activeEditorMedium}${separator}${rootName}",
  // 编辑器建议 显示在头部
  "editor.snippetSuggestions": "top",
  "editor.suggestSelection": "first",
  "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue"
}