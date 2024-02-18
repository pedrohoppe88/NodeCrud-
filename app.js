const express = require('express');
const app = express();
const User = require('./models/User');

const db = require('./models/db');

app.get('/', (req, res) => {
    res.send(`
        <form action="/cadastrar" method="post">
            <input type="text" name="firstName" placeholder="Primeiro nome">
            <input type="text" name="lastName" placeholder="Sobrenome">
            <input type="email" name="email" placeholder="Email">
            <button type="submit">Cadastrar</button>
        </form>
    `);
});

app.post("/cadastrar", async (req, res) => {
    const { name, email } = req.body;

    try {
        const newUser = await User.create({ name, email });

        res.json({
            erro: false,
            mensagem: "Usuário cadastrado com sucesso!",
            usuario: newUser
        });
    } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
        res.status(400).json({ erro: 'Falha no cadastro do usuário' });
    }
});
app.listen(3031, () => {
    console.log("servidor iniciado");

});

