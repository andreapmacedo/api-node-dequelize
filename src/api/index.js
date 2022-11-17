const express = require('express')

const cursosRouter = require('./controller/cursos')
const estudantesRouter = require('./controller/estudantes')

const router = express.Router()

router.get('/', (req, res) => {
  res.send('App online!')
})

router.use('/cursos', cursosRouter)
router.use('/estudantes', estudantesRouter)

module.exports = router