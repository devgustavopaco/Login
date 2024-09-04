import { ReactNode } from 'react';
import './globals.css'; 
import styles from './page.module.css'; 

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="pt-BR">
      <head>
        <title></title>
        <meta name="description" content="Descrição do meu projeto" />
      </head>
      <body className={styles.layout}>
        {children}
      </body>
    </html>
  );
}

