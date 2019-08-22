# WEB+DB PRESS vol.112 号「コンポーネント設計 - モダンフロントエンドの構造化と分割の新提案」のサンプルコード

WEB+DB PRESS vol.112 号のサンプルコード用リポジトリです。
[@tyshgc](https://twitter.com/tyshgc)

## ディレクトリの説明

| ディレクトリ   | ディレクトリ名                             |
| :------------- | :----------------------------------------- |
| `/chapter2`    | 2 章スイッチコンポーネントのサンプルコード |
| `/destination` | 4 章宛先管理のサンプルコード               |
| `/aparel-ec`   | 5 章アパレル EC のサンプルコード           |

- **※各ディレクトリに React.js = `/react`・Vue.js = `/vue` を収録しています**

## サンプルコードの実行方法

### 必要なもの

| 必要なもの                        | 推奨バージョン       | 参考                                                           |
| :-------------------------------- | :------------------- | :------------------------------------------------------------- |
| [node.js](https://nodejs.org/ja/) | v10.15.3(npm v6.4.1) | [nodebrew](https://github.com/hokaccha/nodebrew)をお勧めします |
| [yarn](https://yarnpkg.com/en/)   | 最新で               |                                                                |
| [vue-cli](https://cli.vuejs.org/) | v3.7.0               |                                                                |

### インストール

React・Vue ともに各サンプルコードのルートディレクトリに移動して `yarn install` をしてください。

#### 例）chapter2/react の場合

```
cd examples/chapter2/react
yarn install
```

### 実行

React・Vue ともに `yarn start` でローカルサーバ上で動作します。
