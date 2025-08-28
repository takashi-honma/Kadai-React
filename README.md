# 概要

このアプリケーションは課題で作成したログインページのテストになります。
HTML,CSS,ReactおよびJavaScript,PostgreSQLを使用しています。

# 実行手順

①本リポジトリのGithubからクローンを行い、展開してください。

②コマンドプロンプト等からクローンしたリポジトリに移動し、ルートディレクトリで以下のコードを実行してください。

`npm install`

③PostgreSQLにて新しいデータベースを作成してください。

④作成したデータベースのデータを元に、.envファイルを作成・設定してください。書き方は.env.exampleファイルまたは、以下を参考にしてください。
```
PGHOST=postgresqlのホスト
PGPORT=postgresqlのポート
PGUSER=postgresqlのユーザー名
PGPASSWORD=postgresqlのパスワード
PGDATABASE=作成したpostgresqlのデータベース名
```

⑤『②』を実行したディレクトリと同じディレクトリ内で、以下のコードを順番に実行してください。

`npm run db-init`

`npm run dev`

⑥ブラウザにて、ログに表示されたサーバーURLにアクセスしてください。

⑦表示された画面にて、ユーザーIDを「username_test」と、パスワードを「password_test」と入力し、送信ボタンを押してください。

⑧「ログイン成功」と画面に表示された場合、正常に実行できています。
