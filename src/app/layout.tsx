import { ReactNode } from 'react';
import './globals.css';
import { metadata } from './metadata';
import styles from './page.module.css';

interface LayoutProps {
    children: ReactNode;
}

export { metadata };
export default function Layout({ children }: LayoutProps) {
    return (
        <html lang="pt-BR">
            <head>
                <link rel="icon" href="/favicon.ico" />
            </head>
            <body className={styles.layout}>{children}</body>
        </html>
    );
}
