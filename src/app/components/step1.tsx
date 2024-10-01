"use client";

import { useState } from "react";
import styles from "../page.module.css";

interface EmailLoginProps {
  setEmail: (email: string) => void;
  onNext: () => void;
}

export default function EmailLogin({ setEmail, onNext }: EmailLoginProps) {
  const [emailInput, setEmailInput] = useState("");

  const handleEmailSubmit = (e: any) => {
    e.preventDefault();
    if (emailInput) {
      setEmail(emailInput);
      onNext();
    }
  };

  return (
    <form onSubmit={handleEmailSubmit} className={styles.form}>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="Email, telefone ou Skype"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
      />
      <div className={styles.links}>
        <a href="#">
          Não tem uma conta? <strong>Crie uma!</strong>
        </a>
        <a className={styles.naoConsegueAcessar} href="#">
          Não consegue acessar sua conta?
        </a>
      </div>

      <div className={styles.flex}>
        <button type="button" className={styles.voltar}>
          Voltar
        </button>
        <button type="submit">Avançar</button>
      </div>
    </form>
  );
}
