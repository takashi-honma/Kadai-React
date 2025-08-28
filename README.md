# 概要

このアプリケーションは課題で作成したログインページのテストになります。
HTML,CSS,ReactおよびJavaScript,PostgreSQLを使用しています。

# 実行手順

①本リポジトリのGithubからクローンを行い、展開してください。

②コマンドプロンプト等からクローンしたリポジトリに移動し、以下の三つのディレクトリで、`npm install`を実行してください。

```
- FrontEnd/
- FrontEnd/index/
- BackEnd/
```

③PostgreSQLにて新しいデータベースを作成してください。

④作成したデータベースのデータを元に、BackEndディレクトリ内に.envファイルを作成・設定してください。書き方は.env.exampleファイルまたは、以下を参考にしてください。
```
PGHOST=postgresqlのホスト
PGPORT=postgresqlのポート
PGUSER=postgresqlのユーザー名
PGPASSWORD=postgresqlのパスワード
PGDATABASE=作成したpostgresqlのデータベース名
```

⑤以下のコードを順番に実行してください。『保存場所』とある部分に関しては、ご自身の環境における本プロジェクトの保存場所のパスを参照してください。

`cd 『保存場所』/BackEnd`

`npm run db-init`

`npm run dev`

`cd 『保存場所』/FrontEnd`

`npm start`

⑥自動的に遷移した画面にて、ユーザーIDを「username_test」と、パスワードを「password_test」と入力し、送信ボタンを押してください。

⑦「ログイン成功」と画面に表示された場合、正常に実行できています。
