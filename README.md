# webdb_component_design

WEB+DB PRESS vol.112 号のサンプルコード用リポジトリです。随時アップデート中！
write by [@tyshgc](https://twitter.com/tyshgc)

## ディレクトリの説明

|                | ディレクトリ名                             | 内容 |
| :------------- | :----------------------------------------- | ---- |
| `/chapter2`    | 2 章スイッチコンポーネントのサンプルコード |
| `/destination` | 4 章宛先管理のサンプルコード               |
| `/aparel-ec`   | 5 章アパレル EC のサンプルコード           |

- **※各ディレクトリに React.js = `/react`・Vue.js = `/vue` を収録しています**
- **※`/aparel-ec/vue` については後日 push します。気になる方はこのリポジトリの watch をお願いします。**
- **※Style や型定義、誌面では軽く流している状態管理周りなどについても調整・リファクタなどしていく予定です。**

## サンプルコードの実行方法

### 必要なもの

| 必要なもの                        | 推奨バージョン       | 参考 |
| :-------------------------------- | :------------------- | :--- |
| [node.js](https://nodejs.org/ja/) | v10.15.3(npm v6.4.1) |      | [nodebrew](https://github.com/hokaccha/nodebrew)をお勧めします  |
| [yarn](https://yarnpkg.com/en/)   | 最新で               |      |
| [vue-cli](https://cli.vuejs.org/) | v3.7.0               |

### インストール

React・Vue ともに各サンプルコードのルートディレクトリに移動して `yarn install` をしてください。

#### 例）chapter2/react の場合

```
cd examples/chapter2/react
yarn install
```

### 実行

React・Vue ともに `yarn start` でローカルサーバ上で動作します。
