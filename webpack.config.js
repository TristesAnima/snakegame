const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "production",
  // 入口文件
  entry: './src/index.ts',
  // 输出目录
  output: {
    // 指定打包后的目录
    path: path.resolve(__dirname, 'dist'),
    // 打包后文件的名字
    filename: 'main.js',
    // webpack 版本5 后 直接加 clean: true 即可把打包后文件替换为最新
    clean: true,
    // 不使用箭头函数
    environment: {
      arrowFunction: false
    }
  },

  // 指定 webpack 打包时使用的模块
  module: {
    // 指定加载规则
    rules: [
      {
        // 指定规则规则的文件
        test: /\.ts$/,
        // 要使用 loader
        use: [
          // 配置babel
          {
            // 指定加载器
            loader: "babel-loader",
            // 设置babel
            options: {
              // 设置预定义环境
              presets: [
                [
                  // 指定环境插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 兼容目标浏览器
                    targets: {
                      "chrome": "88"
                      // "ie": "11"
                    },
                    // 指定 corejs 版本  usage 表示按需加载
                    "corejs": "3",
                    "useBuiltIns": "usage"
                  }
                ]
              ]
            }
          },
          'ts-loader'
        ],
        // 要排除的文件
        exclude: /node_modules/
      },
      // less 文件处理
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: 'last 2 versions'
                    }
                  ]
                ]
              }
            }
          },
          "less-loader"
        ]
      }
    ]
  },

  // 配置 webpack 插件
  plugins: [
    new HTMLWebpackPlugin({
      // title: '自定义title'
      // 模板
      template: './public/index.html'
    })
  ],

  // 用来设置引用模块
  resolve: {
    extensions: ['.ts', '.js']
  }
}
