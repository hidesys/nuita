import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

export default function Landing() {
  return (
    <Container>
      <h1>This is landing page!</h1>

      <div>
        <Link to="/users/sign_up">
          <Button variant="primary" className="mr-2">新規登録</Button>
        </Link>
        <Link to="/users/sign_in">
          <Button variant="secondary">ログイン</Button>
        </Link>
      </div>
    </Container>
  )
}
