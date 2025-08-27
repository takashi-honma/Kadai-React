import 'dotenv/config';
import { Client } from 'pg';

const client = new Client({
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE
});

async function databaseInit() {
    try {
        await clientConnection();
        await createDB();
        await createDummyUser();
        console.log('データベースの初期設定に成功しました！');
    } catch (err) {
        console.error('データベースの初期設定に失敗しました。');
    } finally {
        client.end();
    }
}

async function clientConnection() {
    try {
        await client.connect();
    } catch (err) {
        console.error('接続エラー:データベース接続でエラーが発生しました。', err);
        throw err;
    }
}

async function createDB() {
    try {
        await client.query('CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY,username TEXT UNIQUE NOT NULL, password TEXT NOT NULL);');
    } catch (err) {
        console.error('クエリエラー:データベース作成でエラーが発生しました。', err);
        throw err;
    }
}

async function createDummyUser() {
    try {
        await client.query("INSERT INTO users (username, password) VALUES ('username_test', 'password_test');")
    } catch (err) {
        console.error('クエリエラー:ダミーユーザーの作成でエラーが発生しました。', err);
        throw err;
    }
}

databaseInit();