const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send(`
<!doctype html>
<html lang="pt-BR">
<head><meta charset="utf-8"><title>Meu projeto Cloud</title></head>
<body>
<h1>Meu projeto Node.js</h1>
<p>Aplicação de demonstração para a disciplina.</p>
<a href="/sobre">Sobre</a> | <a href="/contacto">Contacto</a>
</body>
</html>
`);
});

app.get('/sobre', (req, res) => {
res.send(`
<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">
<title>Sobre</title></head><body>
<h1>Sobre o projeto</h1><p>Esta aplicação foi criada com Node.js e Express.</p>
<a href="/">Voltar ao início</a></body></html>
`);
});

app.get('/contacto', (req, res) => {
res.send(`
<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">
<title>Contacto</title></head><body>
<h1>Contacto</h1><p>Entre em contacto: aluno@exemplo.com</p>
<a href="/">Voltar ao início</a></body></html>
`);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
console.log(`Servidor ativo na porta ${PORT}`);
});