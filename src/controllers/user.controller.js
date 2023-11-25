const userService = require('../services/user.service.js')
const mongoose = require("mongoose")


//função create para user, recebe de services
//série de verificações feitas pela função create
const create = async (req, res) => {
    const { name, username, email, password, avatar, background } = req.body;
    //para o caso de alguma das informações solicitadas não ser fornecida pelo usuário
    if (!name || !username || !email || !password || !avatar || !background) {
        res.status(400).send({ message: "Por favor, preencha todos os campos!" })
    }
    //chama o service onde cria efetivamente o nosso usuário
    const user = await userService.create(req.body);

    if (!user) {
        return res.status(400).send({ message: "Error creating User" })
    }


    res.status(201).send({
        message: "User created successfully",
        user: {
            id: user._id,
            name,
            username,
            email,
            avatar,
            background
        },
    });
};

//Função GET para user, recebe de services
//findAll do controller ≠ findAll de useService
const findAll = async (req, res) => {
    const users = await userService.findAllService()

    if (users.length === 0) {
        return res.status(400).send({ message: "Não existe usuários registrados" })
    }

    res.send(users)

};

//função GET para id de user,, recebe de services
const findById = async (req, res) => {
    const id = req.params.id
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({ message: "Id inválido" })
    }
    //o retorno em services é colocado em user
    const user = await userService.findByIdService(id)

    if (!user) {
        return res.status(400).send({ message: "Usuário não encontrado" })
    }

    res.send(user)
}


module.exports = { create, findAll, findById };