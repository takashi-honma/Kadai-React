import React, { useState } from 'react';
import classNames from 'classnames';
import './App.css';
import './sanitize.css';
import { TextSection, FormInput, LoadingSection } from './component.jsx';

function App() {

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [message, setMessage] = useState('IDとパスワードを入力してください');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  function changeValue(id, value) {
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  }

  function LoginRequest(username, password) {
    if (username === '' || password === '') {
      setMessage('ユーザー名かパスワードが未入力です！');
      setIsError(true);
      return;
    }

    setIsLoading(true);

    fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: username, password })
    })
      .then((res) => res.json())
      .then(({ success, message }) => {
        setMessage(message);
        setIsError(!success);
        setIsLoading(false);
      });
  }

  return (
    <>
      <div className="box">
        <TextSection
          level="h1"
          id="text-top"
          text="ログイン"
          isError = {false}
        />

        <TextSection
          level="h2"
          id="text"
          text={message}
          isError = {isError}
        />

        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <table className="form-table">

            <FormInput
              label="ユーザーID"
              type="text"
              id="username"
              value={formData.username}
              changeValue={changeValue}
            />

            <FormInput
              label="パスワード"
              type="password"
              id="password"
              value={formData.password}
              changeValue={changeValue}
            />

          </table>

          <section className="section">
            <button type="submit" className="button" id="button" onClick={() => LoginRequest(formData.username, formData.password)}>送信</button>
          </section>
        </form>
      </div>

      {isLoading && <LoadingSection />}
    </>
  );
}

export default App;
