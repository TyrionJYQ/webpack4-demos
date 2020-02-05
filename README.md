# webpack4-demos
#### 1 打包js

支持打包es6, commjs, amd等模块，amd模块会单独打包成一个bundle文件，每个遵循amd规范的模块文件都会打包成一个单独的bundle.

#### 2.编译es6

- 安装`babel`

```javascript
npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env -D
npm install @babel/plugin-transform-runtime -D
npm install @babel/polyfill  @babel/runtime -S
```

- 编写配置文件 `webpack.config.js`

```javascript
module.exports = {
  entry,
  output,
  modules: {
  	rules: [
  		{
  			test: /\.js$/,
            use: 'babel-loader'
		}
	]
  }
  
}
```

- 编写`.babelrc`

```javascript
{
  "presets": [
    ["@babel/preset-env", {
		targets: ["last 2 versions", "> 1%" ]  
	}]
  ],
  "plugins": ["@babel/transform-runtime"]
}
```



> babel-plugin-transform-runtime 与babel-polyfill的区别在与babel-polyfill是全局垫片，在全局都起作用，而babel-plugin-transform-runtime是局部垫片，使用babel-polyfill只需要在文件中导`import @babel.polyfill`,而`babel-plugin-transform-runtime`需要在`.babelr`文件中进行配置