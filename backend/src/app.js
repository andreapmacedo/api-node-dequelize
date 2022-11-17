const express = require('express')
const cors = require('cors')
const routers = require('./api')
const { sequelize } = require('./models')


const app = express()

app.use(cors())
app.use(express.json())
app.use('/', routers)

sequelize.sync().then(() => {
  console.log('Database connected');
});

// recriar o banco
// sequelize.sync({ force: true }).then(() => {
//   console.log('Database connected');
// });

app.listen(3000, () => {
  console.log('App online!')
});