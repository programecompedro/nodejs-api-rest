module.exports = app => {

    app.get('/atendimentos', (req, res) => { res.send('Você esta na rota de atendimentos e esta usando o GET') });

    app.post('/atendimentos', (req, res) => {
        res.send("Você está na rota de atendimentos , e está realizando um POST")
        console.log(req.body)
    })
}