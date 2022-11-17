const express = require('express')
const routers = require('./api')
const { sequelize } = require('./models')


const app = express()

app.use(express.json())
app.use('/', routers)

sequelize.sync().then(() => {
  console.log('Database connected');
});

app.listen(3000, () => {
  console.log('App online!')
});