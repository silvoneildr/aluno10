import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Card from 'Components/Card';
import Button from 'Components/Button';
import LabelError from 'Components/Label/Error';
import Container, { Form } from './styles';

export default function Login() {
  const [email, setEmail] = useState({ value: '', hasError: false, touched: false });
  const [password, setPassword] = useState({ value: '', hasError: false, touched: false });
  const loginMessages = useSelector(state => state.messages.login);

  function handleEmail({ target: { value: emailValue } }) {
    if (!emailValue && email.touched) {
      setEmail({
        ...email,
        value: emailValue,
        hasError: true
      });
    } else {
      setEmail({
        ...email,
        value: emailValue,
        hasError: false,
        touched: true
      });
    }
  }

  function handlePassword({ target: { value: passwordValue } }) {
    if (!passwordValue && password.touched) {
      setPassword({
        ...password,
        value: passwordValue,
        hasError: true
      });
    } else {
      setPassword({
        ...password,
        value: passwordValue,
        hasError: false,
        touched: true
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.value || !password.value) {
      return;
    }
    alert('Foi');
  }
  return (
    <Container>
      <Card>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="email">
            <input
              placeholder={loginMessages.placeholderEmail}
              type="email"
              name="email"
              onChange={handleEmail}
              value={email.value}
              className={email.hasError ? 'error' : ''}
              id="email"
            />
          </label>
          {email.hasError && <LabelError>{loginMessages.emailError}</LabelError>}
          <label htmlFor="password">
            <input
              placeholder={loginMessages.placeholderPassword}
              type="password"
              name="password"
              onChange={handlePassword}
              value={password.value}
              className={password.hasError ? 'error' : ''}
              id="password"
            />
          </label>
          {password.hasError && <LabelError>{loginMessages.passwordError}</LabelError>}
          <Button type="submit" onClick={handleSubmit} color="primary">
            {loginMessages.buttonLogin}
          </Button>
        </Form>
      </Card>
    </Container>
  );
}
