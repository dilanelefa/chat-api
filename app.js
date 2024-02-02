require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const http = require('node:http')

const app = express()

//routes
const index = require('./routes/index')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use((req, res, next) => {
    

    next()
})
app.use('/',index)


const db= require('./models/index');

// Force la synchronisation des modèles avec la base de données
db.sequelize.sync({ force: true })
  .then(() => {
    console.log('Synchronisation réussie.');
  })
  .catch(err => {
    console.error('Erreur de synchronisation :', err);
  });

const server = http.createServer(app)
const port = process.env.PORT || 3000
server.listen(port, () => {
    console.log(`Server runing on, http://${process.env.HOST || 'localhost'}:${port}`)
})