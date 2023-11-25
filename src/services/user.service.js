//acesso ao banco de dados
const User = require("../models/User")

const create = (body) => User.create(body)

const findAllService = () => User.find()

module.exports = {
    create,
    findAllService,
}