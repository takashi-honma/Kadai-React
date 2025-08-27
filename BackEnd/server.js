import 'dotenv/config';
import express from 'express';
import { Client } from 'pg';

const app = express();

const client = new Client({
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE
});

//はじめに一回だけ、接続処理を行う。
(
    async () => {
        try {
            await client.connect()
            console.log('PostgreSQL Message:接続成功')
        } catch (err) {
            console.error('PostgreSQL Error Message:接続失敗:', err)
        }
    }
)();

app.use(express.static('public'));
app.use(express.json());

app.post('/api/send', (req, res) => {
    const { userId, password } = req.body;

    client.query('SELECT 1 FROM users WHERE username = $1 AND password = $2', [userId, password])
        .then(sqlRes => {
            if (sqlRes.rows.length > 0) {
                return res.status(200).json({ "success": true, "message": "ログイン成功" });
            } else {
                return res.status(401).json({ "success": false, "message": "ユーザーIDまたはパスワードが正しくありません" });
            }
        })
        .catch(err => {
            console.error('データベースエラー:', err);
            return res.status(500).json({ "success": false, "message": "データベース接続でエラーが発生しました！" });
        });
});

app.listen(3000, () => {
    console.log('Server: http://localhost:3000');
});
