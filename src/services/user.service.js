//acesso ao banco de dados
const User = require("../models/User")

const create = (body) => User.create(body)

const findAllService = () => User.find()

const findByIdService = (id) => User.findById(id)

const updateService = (
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
) => User.findOneAndUpdate({_id: id}, { name, username, email, password, avatar, background })

module.exports = {
    create,
    findAllService,
    findByIdService,
    updateService,
};