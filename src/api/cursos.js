const express = require('express')
const router = express.Router()
const { curso } = require('../models')

const listaCursos = []

// router.get('/', (req, res) => {
//   res.json(listaCursos)
// })

// router.post('/', (req, res) => {
//   const dadosCurso = req.body
//   console.log(dadosCurso)
//   listaCursos.push(dadosCurso)
//   res.send('Curso adicionado com sucesso!')
// })

router.get('/', async (req, res) => {
  const cursos = await curso.findAll()
  res.json(cursos)
})

router.post('/', async(req, res) => {
  const { nome, ch } = req.body
  await curso.create({ nome, ch }) // função assíncrona do sequelize
  res.send('Curso adicionado com sucesso!')
})

module.exports = router