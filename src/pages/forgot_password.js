import styles from '../styles/Home.module.css'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { Col, Container, Form, FormGroup, Input, Label, Row, Button } from 'reactstrap'
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')

  const doResetEmail = () => {
    const auth = getAuth()
    const actionCodeSettings = {
      url: 'http://localhost:3000/login',
      handleCodeInApp: false,
    }

    sendPasswordResetEmail(auth, email, actionCodeSettings)
      .then(() => {
        alert('送信')
        console.log(email)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className={styles.card}>
      <h1>パスワード再設定</h1>
      <div>
        <Form>
          <FormGroup>
            <Label>メールアドレス</Label>
            <Input
              type="email"
              name="email"
              style={{ height: 50, fontSize: '1.2rem' }}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <Button
            style={{ width: 220 }}
            color="primary"
            onClick={() => {
              doResetEmail()
            }}
          >
            送信
          </Button>
        </Form>
      </div>
    </div>
  )
}
