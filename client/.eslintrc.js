module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  //no-defind 
  globals :{
    "document": true,
    "localStorage": true,
    "window": true,
    "ECharts" : true,
    "$axios" : true,
    "axios" : true,
    "Velocity":true,
    "Echarts" : true,
    "Editor" : true,
  }
}
