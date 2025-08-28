import React, { useState } from 'react';
import './App.css';
import './sanitize.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('IDとパスワードを入力してください');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function LoginRequest(e) {
    e.preventDefault();

    if (username === '' || password === '') {
      setMessage('ユーザー名かパスワードが未入力です！');
      setIsError(true);
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: username, password })
      })
      const { success, message } = await res.json();
      setMessage(message);
      setIsError(!success);

    } catch (error) {
      setMessage('通信エラーが発生しました。');
      setIsError(true);
      console.error('Fetch Error Message:バックエンドとの通信失敗:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="box">
        <section className="section">
          <h1 className="text" id="text-top">ログイン</h1>
        </section>
        <section className="section">
          <h2 className={isError ? 'text miss' : 'text'} id="text">{message}</h2>
        </section>
        <form className="form" onSubmit={LoginRequest}>
          <table className="form-table">
            <tbody>
              <tr>
                <th>
                  <label className="form-headline" htmlFor="username">
                    ユーザーID
                  </label>
                </th>
                <td>
                  <input
                    className="input"
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label className="form-headline" htmlFor="password">
                    パスワード
                  </label>
                </th>
                <td>
                  <input
                    className="input"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <section className="section">
            <button type="submit" className="button" id="button">送信</button>
          </section>
        </form>
      </div>

      <section className={isLoading ? 'section' : 'section hidden'} id="loadingSection">
        <div className="loading">
          <div className="loading-circle"></div>
        </div>
      </section>
    </>
  );
}

export default App;
