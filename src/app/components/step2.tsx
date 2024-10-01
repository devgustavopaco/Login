"use client";

import { useState } from "react";
import styles from "../page.module.css";

interface PasswordLoginProps {
  email: string;
}

export default function PasswordLogin({ email }: PasswordLoginProps) {
  const [password, setPassword] = useState("");

  const handlePasswordSubmit = async (e: any) => {
    e.preventDefault();

    const response = await fetch("/api/emailPassword", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log(data);

    if (response.ok) {
      console.log("Login:", email, "Password:", password);
    } else {
      console.error("Erro ao enviar os dados");
    }
  };

  return (
    <form onSubmit={handlePasswordSubmit} className={styles.form}>
      <div className={styles.emailDisplay}>
        <p>{email}</p>
      </div>
      <h2 className={styles.secondTitle}>Insira sua senha</h2>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className={styles.flexLinks}>
        <a className={styles.forgotPassword} href="#">
          Esqueceu a senha?
        </a>
        <a className={styles.forgotPassword} href="#">
          Forgot username
        </a>
      </div>
      <div className={styles.flex}>
        <button type="submit">Entrar</button>
      </div>
    </form>
  );
}
